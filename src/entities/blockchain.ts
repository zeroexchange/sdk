import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Blockchain` is Ether.
 */
export class Blockchain {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Blockchain`.
   */
  public static readonly ETHEREUM: Blockchain = new Blockchain(18, 'ETH', 'Ethereum')
  public static readonly ETHEREUM_TEST: Blockchain = new Blockchain(18, 'TETH', 'Ethereum (Testnet)')
  public static readonly AVALANCHE: Blockchain = new Blockchain(18, 'AVAX', 'Avalanche')
  public static readonly AVALANCHE_TEST: Blockchain = new Blockchain(18, 'TAVAX', 'Avalanche (Testnet)')
  public static readonly POLKADOT: Blockchain = new Blockchain(18, 'DOT', 'Polkadot')
  public static readonly POLKADOT_TEST: Blockchain = new Blockchain(18, 'TDOT', 'Polkadot (Testnet)')

  /**
   * Constructs an instance of the base class `Blockchain`. The only instance of the base class `Blockchain` is `Blockchain.ETHER`.
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

const ETHEREUM = Blockchain.ETHEREUM
export { ETHEREUM, AVALANCHE, POLKADOT }
