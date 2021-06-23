import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
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
  HECO = 128,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x2Ef422F30cdb7c5F1f7267AB5CF567A88974b308'
export const INIT_CODE_HASH = '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'

// export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
// export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const FACTORY_AND_INIT: any = {
  [ChainId.MAINNET]: {
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    initCodeHash: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
  },
  [ChainId.RINKEBY]: {
    factoryAddress: '0x875D0F2ad61803927c087ac2ef82539706f5364C',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.AVALANCHE]: {
    factoryAddress: '0x2Ef422F30cdb7c5F1f7267AB5CF567A88974b308',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.FUJI]: {
    factoryAddress: '0xeEdaAB3cdb85B77430f2272f6cDbaE2020F48c80',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.SMART_CHAIN]: {
    factoryAddress: '0x52AbdB3536a3a966056e096F2572B2755df26eac',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.SMART_CHAIN_TEST]: {
    factoryAddress: '0x2583e5E9c4E0CA0C4F4DfFA5eacC1ce1fC0e277c',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.MOONBASE_ALPHA]: {
    factoryAddress: '0x2583e5E9c4E0CA0C4F4DfFA5eacC1ce1fC0e277c',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.MUMBAI]: {
    factoryAddress: '0xeEdaAB3cdb85B77430f2272f6cDbaE2020F48c80',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.MATIC]: {
    factoryAddress: '0x6FD98Cf211134081fe02F551D64Cf89671D5443b',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
  [ChainId.HECO]: {
    factoryAddress: '0xf54e0e467f9644b73819637b30de52b5a1d511e6',
    initCodeHash: '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'
  },
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
