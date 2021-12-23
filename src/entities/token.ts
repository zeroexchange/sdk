import { ChainId } from '../constants'
import { Currency } from './currency'
import invariant from 'tiny-invariant'
import { validateAndParseAddress } from '../utils'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string
  public readonly resourceId: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string, resourceId?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
    this.resourceId = resourceId || ''
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
  * Returns true if the two tokens are equivalent, i.e. have the same resourceId.
  * @param other other token to compare
  */
  public equalsResourceId(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.resourceId === other.resourceId
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0x4e7a7ffc71Fb28b037f39b5f5cB8aF0bf5cF3B5C', 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.SMART_CHAIN]: new Token(ChainId.SMART_CHAIN, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.SMART_CHAIN_TEST]: new Token(ChainId.SMART_CHAIN_TEST, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.MOONBASE_ALPHA]: new Token(ChainId.MOONBASE_ALPHA, '0x15623F3b7219FB862dE760c212fFcD13d201c6c6', 18, 'WDEV', 'Wrapped DEV'),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, '0x98878B06940aE243284CA214f92Bb71a2b032B8A', 18, 'WMOVR', 'Wrapped MOVR'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC in Mainnet'),
  [ChainId.HECO]: new Token(ChainId.HECO, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'Wrapped HECO in Mainnet'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', ' Wrapped Fantom in Mainnet'),
  [ChainId.SHIDEN]: new Token(ChainId.SHIDEN, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WSDN', ' Wrapped Shiden in Mainnet'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WIOTX', ' Wrapped Iotex in Mainnet'), // to do paste true address
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WONE', ' Wrapped Harmony in Mainnet'),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WCRO', ' Wrapped Cronos in Mainnet'),
  [ChainId.OKEX]: new Token(ChainId.OKEX, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WOKT', ' Wrapped Okex in Mainnet'),
  [ChainId.MULTIVAC]: new Token(ChainId.MULTIVAC, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WMTV', ' Wrapped MTV in Mainnet')
}
