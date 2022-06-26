import { useCallback, useEffect, useReducer, useRef, useState } from "react";

import React from "react";
import { web3Modal } from "./WalletConnect";

export default function Navbar() {
  const connect = async () => {
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

      const network = await web3Provider.getNetwork();
      // console.log("🚀 | connect | network", network);
      const claimContract = await getContract("TokenVesting", network.chainId);
      // console.log("🚀 | connect | claimContract", claimContract);
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

  return (
    <nav>
      <img src="Pew Logo.png" alt="pew logo" />
      <h1>Pew</h1>
      <button className="nav-link" href="" onClick={connect}>
        Connect
      </button>
      <button className="nav-link" href="">
        Worldcoin
      </button>
    </nav>
  );
}
