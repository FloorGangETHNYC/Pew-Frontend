import { ethers, providers } from "ethers";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";

import React from "react";
import { web3Modal } from "./WalletConnect";

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
      <img src="Pew Logo.png" alt="pew logo" />
      <h1>Pew</h1>

      {screen === "initial" && (
        <button className="nav-link" href="" onClick={connectWallet}>
          {currentAddress ? truncatedAddress(currentAddress) : "Connect"}
        </button>
      )}
      {currentAddress && (
        <button className="nav-link" href="" onClick={}>
          Connect with WorldId
        </button>
      )}

      {/* {currentAddress && <div id="world-id-container"></div>} */}
    </nav>
  );
}
