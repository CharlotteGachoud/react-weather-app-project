import React from "react";

function CurrentTemp(props){
  function tempCelsius(){
    return(
      Math.round(props.data.realFeel)
    );
  }

  function tempFahrenheit(){
    return(
      Math.round((props.data.realFeel * 9 / 5)) + 32
    );
  }

  if(props.unit === "imperial"){
    return(
      <div className="CurrentTemp">
        <div className="current-temp">
          <span className="actual-temp">{tempFahrenheit()}</span>°F
        </div>
      </div>
    );
  }else {
    return(
      <div className="CurrentTemp">
        <div className="current-temp">
          <span className="actual-temp">{tempCelsius()}</span>°C
        </div>
      </div>
    );
  }
}

export default CurrentTemp;