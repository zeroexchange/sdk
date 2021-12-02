import { AVAX, BNB, Currency, DEV, ETHER, HECO, MATIC, MOVR, FTM, SDN, IOTX, ONE, CRO, OKT } from '../currency'
import { BigintIsh, ChainId, Rounding, SolidityType, TEN } from '../../constants'
import { parseBigintIsh, validateSolidityTypeInstance } from '../../utils'

import { Fraction } from './fraction'
import JSBI from 'jsbi'
import _Big from 'big.js'
import { currencyEquals } from '../token'
import invariant from 'tiny-invariant'
import toFormat from 'toformat'

const Big = toFormat(_Big)

export class CurrencyAmount extends Fraction {
  public readonly currency: Currency

  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */
  public static ether(amount: BigintIsh, chainId?: ChainId): CurrencyAmount {
    let currency = ETHER;
    if (chainId && chainId === ChainId.AVALANCHE || chainId === ChainId.FUJI) {
      currency = AVAX;
    }
    if (chainId && chainId === ChainId.SMART_CHAIN || chainId === ChainId.SMART_CHAIN_TEST) {
      currency = BNB;
    }
    if (chainId && chainId === ChainId.MOONBASE_ALPHA) {
      currency = DEV;
    }
    if (chainId && chainId === ChainId.MUMBAI) {
      currency = MATIC;
    }
    if (chainId && chainId === ChainId.MATIC) {
      currency = MATIC;
    }
    if (chainId && chainId === ChainId.HECO) {
      currency = HECO;
    }
    if (chainId && chainId === ChainId.MOONRIVER) {
      currency = MOVR;
    }
    if (chainId && chainId === ChainId.FANTOM) {
      currency = FTM;
    }
    if (chainId && chainId === ChainId.SHIDEN) {
      currency = SDN;
    }
    if (chainId && chainId === ChainId.IOTEX) {
      currency = IOTX;
    }
    if (chainId && chainId === ChainId.HARMONY) {
      currency = ONE;
    }
    if (chainId && chainId === ChainId.CRONOS) {
      currency = CRO;
    }
    if (chainId && chainId === ChainId.OKEX) {
      currency = OKT;
    }
    return new CurrencyAmount(currency, amount)
  }

  // amount _must_ be raw, i.e. in the native representation
  protected constructor(currency: Currency, amount: BigintIsh) {
    const parsedAmount = parseBigintIsh(amount)
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256)

    super(parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency?.decimals)))
    this.currency = currency
  }

  public get raw(): JSBI {
    return this.numerator
  }

  public add(other: CurrencyAmount): CurrencyAmount {
    invariant(currencyEquals(this.currency, other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw))
  }

  public subtract(other: CurrencyAmount): CurrencyAmount {
    invariant(currencyEquals(this.currency, other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw))
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    return super.toSignificant(significantDigits, format, rounding)
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, 'DECIMALS')
    return super.toFixed(decimalPlaces, format, rounding)
  }

  public toExact(format: object = { groupSeparator: '' }): string {
    Big.DP = this.currency.decimals
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(format)
  }
}
