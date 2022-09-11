import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './data'; 

function App() {

  const cardData = data.map(item => {
    console.log(item.id)
    return (
      <Cards
        key={item.id}
        open={item.openSpots}
        image= {item.coverImg}
        rating={item.stats.rating}
        numberOfRatings={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
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
