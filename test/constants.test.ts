import { INIT_CODE_HASH } from '../src/constants'

// import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
// import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])
const COMPUTED_INIT_CODE_HASH = '0x4b5b254233f8aba1e01c0538653d54036e3c9f7873daf99623bb358f1cf33188'

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
