import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="container">
      <Navbar/>
      <Hero />
      <div className="cards-layout">
        <Cards
          image="katie-zaferes.png"
          rating="5.0"
          numberOfRatings={6}
          location="USA"
          description="Life lessons with Katie Zaferes"
          price={125}
        />
        <Cards
          image="katie-zaferes.png"
          rating="5.0"
          numberOfRatings={30}
          location="USA"
          description="Learn wedding photography"
          price={125}
        />
        <Cards
          image="mountain-bike.png"
          rating="5.0"
          numberOfRatings={2}
          location="USA"
          description="Group Mountain Biking"
          price={25}
        />
      </div>
    </div>
  )
}

export default App

