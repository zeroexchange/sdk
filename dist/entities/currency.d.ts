import { ChainId } from '../constants';
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
    static readonly HECO: Currency;
    static readonly MOVR: Currency;
    static readonly FTM: Currency;
    static readonly SDN: Currency;
    static readonly IOTX: Currency;
    static readonly ONE: Currency;
    static readonly CRO: Currency;
    static readonly OKT: Currency;
    static readonly MTV: Currency;
    static readonly METIS: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
export declare const ETHER: Currency;
export declare const AVAX: Currency;
export declare const BNB: Currency;
export declare const DEV: Currency;
export declare const MATIC: Currency;
export declare const HECO: Currency;
export declare const MOVR: Currency;
export declare const FTM: Currency;
export declare const SDN: Currency;
export declare const IOTX: Currency;
export declare const ONE: Currency;
export declare const CRO: Currency;
export declare const OKT: Currency;
export declare const MTV: Currency;
export declare const METIS: Currency;
export declare const ETHER_CURRENCIES: Currency[];
export declare const ETHER_NAMES_CURRENCIES: string[];
export declare const CHAIN_IDS_AND_CURRENCIES: ([ChainId, Currency])[];
export declare const NETWORK_LABELS: {
    [chainId in ChainId]?: string;
};
export declare const NETWORK_SYMBOLS: any;
