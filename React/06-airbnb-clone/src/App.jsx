import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './data'; 

function App() {

  const cardData = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Navbar/>
      <Hero />
      <div className="cards-layout">
        {cardData}
      </div>
    </div>
  )
}

export default App
