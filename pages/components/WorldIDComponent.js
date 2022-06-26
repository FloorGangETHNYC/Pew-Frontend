import React from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { defaultAbiCoder as abi } from "@ethersproject/abi";
import { keccak256 } from "@ethersproject/solidity";
import worldID from "@worldcoin/id";

export const provider = new WalletConnectProvider({
  rpc: {
    80001: "https://rpc-mumbai.maticvigil.com/",
  },
  clientMeta: {
    name: "meshaApp",
    description: "Biggest airdrop is here! World ID example app.",
    url: "https://github.com/worldcoin/world-id-example-airdrop-dapp",
  },
});

const hashBytes = (input) => {
  return abi.encode(
    ["uint256"],
    [BigInt(keccak256(["bytes"], [input])) >> BigInt(8)]
  );
};

const CONTRACT_ADDRESS = "0x32D59776E91fdb3F377755e12cEC05d9067c2B4F";

const CONTRACT_ABI = [
  // Function to claim the airdrop
  "function claim (address receiver, uint256 root, uint256 nullifierHash, uint256[8] calldata proof)",
];

export const WorldIDComponent = ({ signal, setProof }) => {
  console.log("asd");
  const enableWorldID = async () => {
    try {
      const result = await worldID.enable();
      setProof(result);
      console.log("World ID verified successfully: ", result);
    } catch (error) {
      console.error(error);
      enableWorldID().catch(console.error.bind(console));
    }
  };
  React.useEffect(() => {
    try {
      if (!worldID.isInitialized()) {
        worldID.init("world-id-container", {
          action_id: "wid_staging_6e32d91ae5885eaecd779f3af4c900ea",
          signal,
        });
      }
      if (!worldID.isEnabled()) {
        enableWorldID().catch(console.error.bind(console));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div id="world-id-container" />;
};
