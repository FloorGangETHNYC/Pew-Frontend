import React from "react"

export default function Header() {
    return(
        <header className="header">
            <h1>A <em>better</em> peer to peer governance system</h1>
            <h4>Explore our communities, find the one that's right for you, or create your own.</h4>
            <h2>Filter our DAOs</h2>
            <div className="header--filter">
                <button>Name</button>
                <button>Activity</button>
            </div>
        </header>
    )
}