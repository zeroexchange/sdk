/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: Currency;
    static readonly AVAX: Currency;
    static readonly BNB: Currency;
    static readonly DEV: Currency;
    static readonly MATIC: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHER: Currency;
declare const AVAX: Currency;
declare const BNB: Currency;
declare const DEV: Currency;
declare const MATIC: Currency;
declare const ETHER_CURRENCIES: Currency[];
export { ETHER, AVAX, BNB, DEV, MATIC, ETHER_CURRENCIES };
