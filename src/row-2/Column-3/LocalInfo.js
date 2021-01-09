import React from "react";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import Wind from "./Wind";
import "./LocalInfo.css";

function LocalInfo(props){
  return(
    <div className="LocalInfo">
       <div className="humidity">
         <div className="conditions">
           Humidity
         </div>
         <div className ="info-data humidity-data">
           <i class="fas fa-tint drop"></i> {props.data.humidity}%
         </div>
       </div>
       <div className="wind">
         <div className="conditions">
           Wind
         </div>
         <div className ="info-data">
           <Wind data={props.data} unit={props.unit}/>
         </div>
       </div>
       <div className="sunrise">
         <div className="conditions">
           Sunrise
         </div>
         <div className ="info-data">
           <Sunrise sunrise={props.data.sunrise} />
         </div>
       </div>
       <div className="sunset">
         <div className="conditions">
           Sunset
         </div>
         <div className ="info-data">
           <Sunset sunset={props.data.sunset} />
         </div>
       </div>
    </div>
  )
}

export default LocalInfo;