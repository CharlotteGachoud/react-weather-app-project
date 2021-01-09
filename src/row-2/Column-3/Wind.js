import React from "react";

function Wind(props) {
    let windMetric = props.data.wind;
    let windImperial = Math.round(props.data.wind * 0.6);

    if (props.unit === "imperial") {
     return(
       <div className="Wind">
         <i class="fas fa-wind"></i> {windImperial} mph
       </div>
    );       
    } else {
     return(
      <div className="Wind">
        <i class="fas fa-wind"></i> {windMetric} km/h
      </div>
    ); 
    }
}

export default Wind;