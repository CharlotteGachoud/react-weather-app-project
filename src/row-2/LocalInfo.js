import React from "react";

function LocalInfo(props){
  return(
    <div className="LocalInfo">
      <div className="info">
       <div className="humidity">
         <div className="specifics-info">
           Humidity
         </div>
         <div className ="info-data humidity-data">
           💧 {props.data.humidity}%
         </div>
       </div>
       <div className="wind">
         <div className="specifics-info">
           Wind
         </div>
         <div className ="info-data">
           💨 {props.data.wind} km/h
         </div>
       </div>
       <div className="sunrise">
         <div className="specifics-info">
           Sunrise
         </div>
         <div className ="info-data">
           🌄 {props.data.sunriseTime}
         </div>
       </div>
       <div className="sunset">
         <div className="specifics-info">
           Sunset
         </div>
         <div className ="info-data">
           🌇 {props.data.sunsetTime}
         </div>
       </div>
      </div> 
    </div>
  )
}

export default LocalInfo;