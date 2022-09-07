import JSBI from 'jsbi'
export declare type BigintIsh = JSBI | bigint | string
export declare enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
}
export declare enum TradeType {
  EXACT_INPUT = 0,
  EXACT_OUTPUT = 1,
}
export declare enum Rounding {
  ROUND_DOWN = 0,
  ROUND_HALF_UP = 1,
  ROUND_UP = 2,
}
// export declare const FACTORY_ADDRESS = "0x1730484cd33Fb46B22177f3Ffe8E002b4D7E3600";
// export declare const INIT_CODE_HASH = "0xe1a4292e78925c53bcb106503ec2c9a30c35f3fde4c084afc5af611bcffde55b";
// export declare const FACTORY_ADDRESS = '0x403495A1810fF321E2eeA7BBDE28e4C9E20aECba'
// export declare const INIT_CODE_HASH = '0x414a57e3f3127b326d3128654422f2d4a57e2e9bc876ca978b9314242689362e'
export declare const FACTORY_ADDRESS = "0xD9DBe9B223491c170522611002026671c81DDCC9";
export declare const INIT_CODE_HASH = "0x099db3a2aff09a8823e41a0906c1a5b2aff5e7b5a1a954f4e71bfad2c4113c8e";
export declare const MINIMUM_LIQUIDITY: JSBI
export declare const ZERO: JSBI
export declare const ONE: JSBI
export declare const TWO: JSBI
export declare const THREE: JSBI
export declare const FIVE: JSBI
export declare const TEN: JSBI
export declare const _100: JSBI
export declare const _997: JSBI
export declare const _1000: JSBI
export declare enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}
export declare const SOLIDITY_TYPE_MAXIMA: {
  uint8: JSBI
  uint256: JSBI
}
