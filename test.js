import { Chains, StableCoins } from "@/utils/types";
import { avafiveBsc, avafiveEth, avafivePolygon } from "@/utils/web3/chains";
import { bscTestnet, goerli, polygonMumbai, bsc, polygon, mainnet } from "viem/chains";

export interface IChainListItem {
  id: Chains;
  chainId: number;
  unit: string;
  label: string;
  src: string;
  chain: any;
  txLink: string;
}

const devChainList = [
  {
    id: Chains.POLYGON,
    chainId: 31338,
    unit: "Matic",
    label: "Polygon",
    src: `${process.env.NEXT_PUBLIC_S3}polygon-maxiswipe-logo.png`,
    chain: avafivePolygon,
    txLink: "https://mumbai.polygonscan.com/tx/",
  },
  {
    id: Chains.BSC,
    chainId: 31339,
    unit: "Bnb",
    label: "Binance",
    src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
    chain: avafiveBsc,
    txLink: "https://testnet.bscscan.com/tx/",
  },
  {
    id: Chains.ETHEREUM,
    chainId: 31337,
    unit: "Eth",
    label: "Ethereum",
    src: `${process.env.NEXT_PUBLIC_S3}maxiswipe-mxp-ethereum-logo.png`,
    chain: avafiveEth,
    txLink: "https://goerli.etherscan.io/tx/",
  },
] as IChainListItem[];

const stagChainList = [
  {
    id: Chains.POLYGON,
    chainId: 80001,
    unit: "Matic",
    label: "Polygon",
    src: `${process.env.NEXT_PUBLIC_S3}polygon-maxiswipe-logo.png`,
    chain: polygonMumbai,
    txLink: "https://mumbai.polygonscan.com/tx/",
  },
  {
    id: Chains.BSC,
    chainId: 97,
    unit: "Bnb",
    label: "Binance",
    src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
    chain: bscTestnet,
    txLink: "https://testnet.bscscan.com/tx/",
  },
  {
    id: Chains.ETHEREUM,
    chainId: 5,
    unit: "Eth",
    label: "Ethereum",
    src: `${process.env.NEXT_PUBLIC_S3}maxiswipe-mxp-ethereum-logo.png`,
    chain: goerli,
    txLink: "https://goerli.etherscan.io/tx/",
  },
] as IChainListItem[];

const prodChainList = [
    {
      id: Chains.POLYGON,
      chainId: 137,
      unit: "Matic",
      label: "Polygon",
      src: `${process.env.NEXT_PUBLIC_S3}polygon-maxiswipe-logo.png`,
      chain: polygon,
      txLink: "https://polygonscan.com/tx/",
    },
    {
      id: Chains.BSC,
      chainId: 56,
      unit: "Bnb",
      label: "Binance",
      src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
      chain: bsc,
      txLink: "https://bscscan.com/tx/",
    },
    {
      id: Chains.ETHEREUM,
      chainId: 1,
      unit: "Eth",
      label: "Ethereum",
      src: `${process.env.NEXT_PUBLIC_S3}maxiswipe-mxp-ethereum-logo.png`,
      chain: mainnet,
      txLink: "https://etherscan.io/tx/",
    },
  ] as IChainListItem[];
export const devTokenList = [
  {
    id: 1,
    label: "USDT",
    value: StableCoins.USDT,
    src: "/maxiswipe-tether-usdt-logo.svg",
    chain: {
      polygon: "0x8464135c8F25Da09e49BC8782676a84730C318bC",
      binance: "0x8464135c8F25Da09e49BC8782676a84730C318bC",
      ethereum: "0x8464135c8F25Da09e49BC8782676a84730C318bC",
    },
  },
  {
    id: 2,
    label: "USDC",
    value: StableCoins.USDC,
    src: "/maxiswipe-usd-coin-usdc-logo.svg",
    chain: {
      polygon: "0x71C95911E9a5D330f4D621842EC243EE1343292e",
      binance: "0x71C95911E9a5D330f4D621842EC243EE1343292e",
      ethereum: "0x71C95911E9a5D330f4D621842EC243EE1343292e",
    },
  },
  {
    id: 3,
    label: "BUSD",
    value: StableCoins.BUSD,
    src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
    chain: {
      polygon: "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F",
      binance: "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F",
      ethereum: "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F",
    },
  },
];

export const stagTokenList = [
  {
    id: 1,
    label: "USDT",
    value: StableCoins.USDT,
    src: "/maxiswipe-tether-usdt-logo.svg",
    chain: {
      polygon: "0xB750c0b01b4564B295B2BBB457Cf7dc9c21958e4",
      binance: "0x2873F71d91B132420a6BeF7e8eBa8501dC1Fb438",
      ethereum: "0x341D789E8477e8C6E429672cA199493228DC5F51",
    },
  },
  {
    id: 2,
    label: "USDC",
    value: StableCoins.USDC,
    src: "/maxiswipe-usd-coin-usdc-logo.svg",
    chain: {
      polygon: "0x65b81F12F96eeAADB6BE599828eE86e06b5cC4fA",
      binance: "0x0E9945a546bC8606914a7A34FaDCB2CBCd453b91",
      ethereum: "0x341D789E8477e8C6E429672cA199493228DC5F51",
    },
  },
  {
    id: 3,
    label: "BUSD",
    value: StableCoins.BUSD,
    src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
    chain: {
      polygon: "0xa1D54614cDa3B9d4B3685c4481938A2531431294",
      binance: "0xB91CfAFd9832A3321745CE728A477Ee419D210A6",
      ethereum: "0x341D789E8477e8C6E429672cA199493228DC5F51",
    },
  },
];

export const prodTokenList = [
  {
    id: 1,
    label: "USDT",
    value: StableCoins.USDT,
    src: "/maxiswipe-tether-usdt-logo.svg",
    chain: {
      polygon: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      binance: "0x55d398326f99059fF775485246999027B3197955",
      ethereum: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
  },
  {
    id: 2,
    label: "USDC",
    value: StableCoins.USDC,
    src: "/maxiswipe-usd-coin-usdc-logo.svg",
    chain: {
      polygon: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      binance: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      ethereum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
  },
  {
    id: 3,
    label: "BUSD",
    value: StableCoins.BUSD,
    src: "/maxiswipe-binance-usd-busd-logo-ico.svg",
    chain: {
      binance: "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F",
    },
  },
];
export const stabelCoinHelper = " ";

export const chainList =
  process.env.NEXT_PUBLIC_ENV === "development" ? devChainList : stagChainList;

export const tokenList =
  process.env.NEXT_PUBLIC_ENV === "development" ? devTokenList : stagTokenList;