import React from "react";

function RealFeel(props){
  function realFeelCelsius(){
    return(
      Math.round(props.data.realFeel)
    );
  }

  function realFeelFahrenheit() {
    return(
      Math.round((props.data.realFeel * 9 / 5)) + 32
    );
  }

  if(props.unit === "imperial"){
    return(
      <div className="RealFeel">
        <span className="feel-temp">
          {realFeelFahrenheit()}
        </span>°F
      </div>
    );
  } else{
    return(
      <div className="RealFeel">
        <span className="feel-temp">
          {realFeelCelsius()}
        </span>°C
      </div>

    );
  }
}

export default RealFeel;