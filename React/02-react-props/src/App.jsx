import { useState } from 'react'

function App() {

  const date = new Date();
  const hour = date.getHours();
  let timeOfDay;

  if(hour < 12){
    timeOfDay = 'Morning';
  }
  else if (hour >= 12 && hour < 17){
    timeOfDay = 'Afternoon';
  }
  else{
    timeOfDay = 'Night';
  }

  return (
     <h1>Good {timeOfDay}!</h1>
  )
}

export default App
