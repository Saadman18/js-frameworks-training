import React from "react"
import Jokes from "./components/Jokes"
import jokesData from "../public/jokesData"

function App() {
    const jokes = jokesData.map(joke => {
      return <Jokes setup={joke.setup}
                    punchline={joke.punchline}
             />
    });

  return (
    <div className="container h-screen flex flex-col justify-center items-center ">
      {jokes}
    </div>
  )
}

export default App
