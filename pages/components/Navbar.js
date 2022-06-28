import { ethers, providers } from "ethers";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";

import Image from "next/image";
import React from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
};

const web3Modal = () => {
  if (typeof window !== "undefined") {
    return new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true,
      providerOptions, // required
    });
  }
};

// import worldID from "@worldcoin/id";

const truncatedAddress = (address) => {
  return address.substring(0, 5) + "...";
};

export default function Navbar() {
  const [screen, setScreen] = React.useState("initial");
  const [currentAddress, setAddress] = useState("");
  const connectWallet = async () => {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    let provider;
    try {
      provider = await web3Modal().connect();

      // We plug the initial `provider` into ethers.js and get back
      // a Web3Provider. This will add on methods from ethers.js and
      // event listeners such as `.on()` will be different.
      const web3Provider = new providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
    } catch (error) {
      console.log("🚀 | connect | error", error);
      // Handle if user closes modal
      console.log("User cancelled connection");
    }
  };

  const disconnect = useCallback(async function () {
    await web3Modal.clearCachedProvider();
    if (provider?.disconnect && typeof provider.disconnect === "function") {
      await provider.disconnect();
    }
  }, []);

  // if (typeof window !== "undefined") {
  //   worldID.init("world-id-container", {
  //     enable_telemetry: true,
  //     action_id: "wid_staging_6e32d91ae5885eaecd779f3af4c900ea",

  //     // <- Set an appropriate signal for each user
  //   });
  // }

  return (
    <nav>
      <Image src="/PewLogo.png" alt="pew logo" height="100%" width="100%" />
      <h1>Pew</h1>

      {screen === "initial" && (
        <button className="nav-link" href="" onClick={connectWallet}>
          {currentAddress ? truncatedAddress(currentAddress) : "Connect"}
        </button>
      )}
      {currentAddress && (
        <button className="nav-link" href="">
          Connect with WorldId
        </button>
      )}

      {/* {currentAddress && <div id="world-id-container"></div>} */}
    </nav>
  );
}
