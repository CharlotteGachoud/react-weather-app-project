import React from "react";

function Wind(props) {
  
  function windMetric(){
    return(
      props.data.wind
      );
    }
    
    function windImperial(){
      return(
        Math.round(props.data.wind * 0.621371)
      );
    }

    if (props.unit === "imperial") {
     return(
       <div className="Wind">
         <i class="fas fa-wind"></i> {windImperial()} mph
       </div>
    );       
    } else {
     return(
      <div className="Wind">
        <i class="fas fa-wind"></i> {windMetric()} km/h
      </div>
    ); 
    }
}

export default Wind;