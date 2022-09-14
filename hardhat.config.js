require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "local",
  networks: {
    hardhat: {
      // forking: {
      //   url: process.env.FORKING_URL_ARBITRUM
      // },
      // mining: {
      //   auto: true,
      //   interval: [10000, 20000]
      // }
    },
    local: {
      url: process.env.LOCAL_URL,
      accounts: [process.env.LOCAL_PKEY, process.env.DARK_ORACLE_PKEY]
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_PKEY]
    },
    mainnet: {
      url: process.env.MAINNET_URL
    },
    arbitrum_rinkeby: {
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [process.env.RINKEBY_PKEY]
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [process.env.ARBITRUM_PKEY]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [process.env.AVALANCHE_PKEY]
    }
  },
  solidity: {
    compilers: [{
      version: "0.8.7",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }]
  }
};
