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
  public static readonly SMART_CHAIN: Blockchain = new Blockchain(18, 'BNB', 'Smart Chain')
  public static readonly SMART_CHAIN_TEST: Blockchain = new Blockchain(18, 'TBNB', 'Smart Chain (Testnet)')
  public static readonly MOONBASE_ALPHA: Blockchain = new Blockchain(18, 'DEV', 'Moonbase Alpha (Testnet)')

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
const AVALANCHE = Blockchain.AVALANCHE
const SMART_CHAIN = Blockchain.SMART_CHAIN
const MOONBASE_ALPHA = Blockchain.MOONBASE_ALPHA
export { ETHEREUM, AVALANCHE, SMART_CHAIN, MOONBASE_ALPHA }
