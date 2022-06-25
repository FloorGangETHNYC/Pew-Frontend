import React from "react"

export default function Navbar() {
    return(
        <nav>
            <h1>Pew</h1>
            <a href="community.html">Community</a>
            <a href="about.html">About</a>
            <button className="navbar--dao" onClick="" align="right">Create DAO</button>
            <button className="navbar--walletConnect" onClick="" align="right">Wallet Connect</button>
            <button className="navbar--worldcoin"onClick="">Worldcoin</button>
        </nav>
    )
}