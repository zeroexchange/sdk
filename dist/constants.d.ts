import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    FUJI = 43113,
    AVALANCHE = 43114,
    SMART_CHAIN = 56,
    SMART_CHAIN_TEST = 97,
    MOONBASE_ALPHA = 1287,
    MUMBAI = 80001,
    MATIC = 137,
    HECO = 128
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x2Ef422F30cdb7c5F1f7267AB5CF567A88974b308";
export declare const INIT_CODE_HASH = "0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188";
export declare const FACTORY_AND_INIT: any;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
