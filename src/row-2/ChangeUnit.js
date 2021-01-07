import React, { useState } from "react";

function ChangeUnit(props){
  const [unit, setunit] = useState("celsius");

  function showFahrenheit(event){
    event.preventDefault();
    setunit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setunit("celsius");
  }

  function fahrenheit(){
    return(props.celsius *9 / 5) + 32;
  }

  if (unit === "celsius"){
return(
    <div className="ChangeUnit">
      <div className="current-temp">
        <span className="actual-temp">{props.celsius}</span>{" "}
        °C | <a href="/" onClick={showFahrenheit}>°F</a>
      </div>
    </div>
  );
  } else {
    return(
    <div className="ChangeUnit">
      <div className="current-temp">
        <span className="actual-temp">{Math.round(fahrenheit())}</span>{" "}
       <a href="/" onClick={showCelsius}>°C</a> | °F
      </div>
    </div>
  )
  }

  
}

export default ChangeUnit;