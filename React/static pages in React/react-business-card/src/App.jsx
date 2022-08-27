import React from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App(){
  return(
    <div className="business-card">
      <Header/>
      <Buttons/>
      <About/>
      <Footer/>
    </div>
  )
}

