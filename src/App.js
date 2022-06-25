import React from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Dao from "./components/Dao"
import data from "./dataDao"

export default function App(){
  const daos = data.map(item => {
    return (
        <Dao
            key={item.id}
            item={item}
        />
    )
})  
  
  return(
    <div>
      <Navbar />
      <Header />
      <section className="container">{daos}</section>
    </div>
  )
}