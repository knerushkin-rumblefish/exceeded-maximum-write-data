import { HardhatUserConfig } from 'hardhat/types';

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-contract-sizer'
import 'hardhat-dependency-compiler'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.1',
    settings: {
      optimizer: { enabled: true, runs: 20 },
      outputSelection: {
        "*": {
          "*": [
            "evm.bytecode",
            "evm.deployedBytecode",
            "abi"
          ]
        }
      },
      "libraries": {}
    },
  },

  typechain: {
    outDir: 'src/contracts',
    target: 'ethers-v5',
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  // dependencyCompiler: {
  //   paths: [
  //     '@balancer-labs/v2-pool-stable/contracts/StablePool.sol',
  //     '@balancer-labs/v2-pool-stable/contracts/StablePoolFactory.sol',
  //     '@balancer-labs/v2-vault/contracts/Authorizer.sol',
  //     '@balancer-labs/v2-vault/contracts/Vault.sol'
  //   ]
  // },

  networks: {
    "localhost-check-size": {
      accounts: [
        '0xd6a9667ae786bdaf6369d42d7847b0368a53a8d6b77c8a2c58f39ea2233fb3f3',
        '0x2330f48cbfcfe8e87503b2195cd3eabcb7837dbd7af80cb297fffc7a3f80d398',
      ],
      chainId: 0x0,
      url: "http://localhost:12345",
      throwOnCallFailures: true,
      gas: 12000000,
      timeout: 100000,
      gasMultiplier: 2
    },
    "godwoken-testnet": {
      accounts: [
        '0xd6a9667ae786bdaf6369d42d7847b0368a53a8d6b77c8a2c58f39ea2233fb3f3',
        '0x2330f48cbfcfe8e87503b2195cd3eabcb7837dbd7af80cb297fffc7a3f80d398',
      ],
      chainId: 0x315db00000006,
      url: "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev",
      throwOnCallFailures: true,
      gas: 12000000,
      timeout: 100000,
      gasMultiplier: 2
    },
    "godwoken-devnet": {
      accounts: [
        '0x1390c30e5d5867ee7246619173b5922d3b04009cab9e9d91e14506231281a997',
        '0x2dc6374a2238e414e51874f514b0fa871f8ce0eb1e7ecaa0aed229312ffc91b0',
      ],
      chainId: 0x116e8,
      url: "http://localhost:8024",
      throwOnCallFailures: true,
      gas: 12000000,
      timeout: 100000,
      gasMultiplier: 2
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/808015861a3048648a41e56b23038945",
      accounts: [
        '0x835839c3eb191647e37058ecb66d1d6ee7e2e7bc7b901fec5b223a8c4f5438e8'
      ],
      throwOnCallFailures: true,
      chainId: 0x3,
      gas: 12000000,
      gasMultiplier: 2
    }
  },
};

export default config;
