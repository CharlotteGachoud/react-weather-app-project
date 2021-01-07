import React from "react";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Wind from "./Wind";

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
           <Wind data={props.data} unit={props.unit}/>
         </div>
       </div>
       <div className="sunrise">
         <div className="specifics-info">
           Sunrise
         </div>
         <div className ="info-data">
           <Sunrise sunrise={props.data.sunrise} />
         </div>
       </div>
       <div className="sunset">
         <div className="specifics-info">
           Sunset
         </div>
         <div className ="info-data">
           <Sunset sunset={props.data.sunset} />
         </div>
       </div>
      </div> 
    </div>
  )
}

export default LocalInfo;