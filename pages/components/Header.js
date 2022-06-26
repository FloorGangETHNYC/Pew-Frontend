import React from "react"

export default function Header() {
    return(
        <header className="header">
            <h1>REINVENTING THE CRYPTO GOVERNANCE SYSTEM</h1>
            <h4>Explore our communities, find the one that is right for you, or create your own.</h4>
            <form action="create.html">
                <input type="submit" value="Create your own DAO" />
            </form>
            {/* <h2>Filter our DAOs</h2>
            <div className="header--filter">
                <button name="rating">Rating</button>
                <button name="activity">Activity</button>
                <button name="alpha">Alphabtical</button>
            </div> */}
        </header>
    )
}