import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
};

export const web3Modal = () => {
  if (typeof window !== "undefined") {
    return new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true,
      providerOptions, // required
    });
  }
};

export const CONTRACT_ADDRESS =
  process.env.WLD_CONTRACT_ADDRESS || // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
  "0x32D59776E91fdb3F377755e12cEC05d9067c2B4F";

export const CONTRACT_ABI = [
  // Function to claim the airdrop
  "function claim (address receiver, uint256 root, uint256 nullifierHash, uint256[8] calldata proof)",
];
