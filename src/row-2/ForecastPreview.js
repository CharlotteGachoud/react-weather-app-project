import React from "react";
import WeatherIcon from "./WeatherIcon";


function ForecastPreview(props){

    function hours(){
      let date = new Date(props.data.dt *1000);
      let hour = date.getHours();
      return `${hour}:00`;
    }

    function temperature(){
      let temperature = Math.round(props.data.main.temp);
      return `${temperature}°C`;
    }

    function description(){
      let description = props.data.weather[0].description;
      return `${description}`;
    }

  return(
    <div className="ForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon}/>
      <div className="description">
      {description()}
      </div>
      {temperature()}
    </div>
  )
}

export default ForecastPreview;