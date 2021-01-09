import React from "react";

function RealFeel(props){
  let realFeelCelsius = Math.round(props.data.realFeel);
  let realFeelFahrenheit = Math.round((props.data.realFeel * 9 / 5)) + 32;

  if(props.unit === "imperial"){
    return(
      <div className="RealFeel">
        <span className="feel-temp">
          {realFeelFahrenheit}
        </span>°F
      </div>
    );
  } else{
    return(
      <div className="RealFeel">
        <span className="feel-temp">
          {realFeelCelsius}
        </span>°C
      </div>

    );
  }
}

export default RealFeel;