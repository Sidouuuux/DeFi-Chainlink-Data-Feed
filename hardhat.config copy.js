require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("./tasks/block-number");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-docgen");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const {
  COINMARKETCAP_API_KEY,
  BSC_RPC_URL,
  BINANCE_RPC_URL,
  SEPOLIA_RPC_URL,
  MUMBAI_RPC_URL,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  ALCHEMY__MAINNET_FORK
} = process.env;
const apiKeys = {
  COINMARKETCAP_API_KEY: COINMARKETCAP_API_KEY || "",
  BSC_RPC_URL: BSC_RPC_URL || "",
  BINANCE_RPC_URL: BINANCE_RPC_URL || "",
  SEPOLIA_RPC_URL: SEPOLIA_RPC_URL || "",
  MUMBAI_RPC_URL: MUMBAI_RPC_URL || "",
  PRIVATE_KEY: PRIVATE_KEY || "",
  ETHERSCAN_API_KEY: ETHERSCAN_API_KEY || "",
  ALCHEMY__MAINNET_FORK: ALCHEMY__MAINNET_FORK || "",
};

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
        forking: {
          url: ALCHEMY__MAINNET_FORK,
        }
      },
    bsc: {
      url: apiKeys.BSC_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 97,
      gasPrice: 50000000000,
    },
    binance: {
      url: apiKeys.BINANCE_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 56,
      gasPrice: 50000000000,
    },
    sepolia: {
      url: apiKeys.SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      gasPrice: 50000000000,
    },
    mumbai: {
      url: apiKeys.MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      gasPrice: 50000000000,
    },
    moon: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      accounts: [PRIVATE_KEY],
      chainId: 1287,
      gasPrice: 50000000000,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    // outputFile: "gas-report.txt",
    // noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "BNB",
  },
};
