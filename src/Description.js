import React from "react";
import WeatherIcon from "./WeatherIcon";

function Description(props){
  return(
    <div className="Description">
      <WeatherIcon className="icons" code={props.data.icon} alt={props.data.mainDescription}/>
      <div className="current-description">
        {props.data.mainDescription}
      </div>
    </div>
  )
}

export default Description;