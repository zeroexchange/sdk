import { ChainId, SolidityType } from '../constants'

import JSBI from 'jsbi'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly AVAX: Currency = new Currency(18, 'AVAX', 'AVAX')
  public static readonly BNB: Currency = new Currency(18, 'BNB', 'BNB')
  public static readonly DEV: Currency = new Currency(18, 'DEV', 'DEV')
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'MATIC')
  public static readonly HECO: Currency = new Currency(18, 'HT', 'HT')
  public static readonly MOVR: Currency = new Currency(18, 'MOVR', 'MOVR')
  public static readonly FTM: Currency = new Currency(18, 'FTM', 'FTM')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

export const ETHER = Currency.ETHER
export const AVAX = Currency.AVAX
export const BNB = Currency.BNB
export const DEV = Currency.DEV
export const MATIC = Currency.MATIC
export const HECO = Currency.HECO
export const MOVR = Currency.MOVR
export const FTM = Currency.FTM
export const ETHER_CURRENCIES = [ETHER, AVAX, BNB, DEV, MATIC, HECO, MOVR, FTM];
export const ETHER_NAMES_CURRENCIES = ['ETH', 'AVAX', 'BNB', 'DEV', 'MATIC', 'HT', 'MOVR', 'FTM'];

export const CHAIN_IDS_AND_CURRENCIES: ([ChainId, Currency])[] = [
  [ChainId.MAINNET, ETHER],
  [ChainId.ROPSTEN, ETHER],
  [ChainId.RINKEBY, ETHER],
  [ChainId.GÖRLI, ETHER],
  [ChainId.KOVAN, ETHER],
  [ChainId.FUJI, AVAX],
  [ChainId.AVALANCHE, AVAX],
  [ChainId.SMART_CHAIN, BNB],
  [ChainId.SMART_CHAIN_TEST, BNB],
  [ChainId.MOONBASE_ALPHA, DEV],
  [ChainId.MOONRIVER, MOVR],
  [ChainId.MUMBAI, MATIC],
  [ChainId.MATIC, MATIC],
  [ChainId.HECO, HECO],
  [ChainId.FANTOM, FTM],
];
