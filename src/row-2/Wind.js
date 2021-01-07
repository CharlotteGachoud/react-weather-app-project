import React from "react";

function Wind(props) {
    let windMetric = props.data.wind;
    let windImperial = Math.round(props.data.wind * 0.6);

    if (props.unit === "fahrenheit") {
     return(
       <div className="Wind">
         💨 {windImperial} mph
       </div>
    );       
    } else {
     return(
      <div className="Wind">
        💨 {windMetric} km/h
      </div>
    ); 
    }
}

export default Wind;