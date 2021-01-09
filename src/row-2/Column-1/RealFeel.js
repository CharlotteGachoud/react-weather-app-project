import React from "react";

function RealFeel(props){
  let realFeelCelsius = Math.round(props.data.realFeel);
  let realFeelFahrenheit = Math.round((props.data.realFeel * 9 / 5)) + 32;

  if(props.unit === "imperial"){
    return(
      <span className="RealFeel">
        {realFeelFahrenheit} °F
      </span>
    );
  } else{
    return(
      <span className="RealFeel">
        {realFeelCelsius} °C
      </span>
    );
  }
}

export default RealFeel;