import React, {useState} from "react";
import './App.css'

const App = () => {
  let time = new Date().toLocaleTimeString('en-US', {hour12: true});
  const [cTime, setcTime]= useState(time)

  const UpdateTime = () => {
    //let time2 = new Date().toLocaleTimeString('en-US', {hour12: true});
  
    setcTime(time)
    // console.log(time)
  }
  setInterval(UpdateTime, 1000)
  return (
    <div className="App">
      <h1>{cTime}</h1>
    </div>
  );
}

export default App;