import React from "react"
import BirbCard from "./components/BirbCard"
import "./App.css"

function App() {

  return (
    <div className="cards">
      <BirbCard
        image="/src/images/tucan.jpg" 
        name="Tucan"
        region="Amazon."
        food="Rodents, Fruits." 
      />
      <BirbCard
        image="/src/images/macaw.jpg"
        name="Macaw"
        region="Amazon."
        food="Seeds, Nuts, Oats."
      />
      <BirbCard
        image="/src/images/seagull.jpg"
        name="Sea Gull"
        region="Oceania"
        food="Small fish, Rodents." 
      />
      <BirbCard
        image="/src/images/peacock.jpg"
        name="Peacock"
        region="Asia, Africa, America."
        food="Rice grains, Wheat." 
      />
    </div>
  )
}

export default App
