import React from "react";
import WeatherIcon from "./WeatherIcon";


function ForecastPreview(props){
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ]
  let day = days[date.getDay()];
  let celsiusMax = Math.round(props.data.temp.max);
  let celsiusMin = Math.round(props.data.temp.min);
  let fahrenheitMax = Math.round((celsiusMax * 9/5) + 32);
  let fahrenheitMin = Math.round((celsiusMin * 9/5) + 32);

   function description(){
      let description = props.data.weather[0].description;
      return `${description}`;
    }

  if(props.unit === "imperial"){
    return(
      <div className="ForecastPreview col">
        <div className="weekdays">
          {day}
        </div>
        <div className="icon">
          <WeatherIcon code={props.data.weather[0].icon}/>
        </div>
        <div className="description">
          {description()}
        </div>
        <div className="temperature">
          <strong>{fahrenheitMax}°F</strong> | {fahrenheitMin}°F
        </div>
      </div>
    );
  } else {
      return(
          <div className="ForecastPreview col">
          <div className="weekdays">
            {day}
          </div>
          <div className="icon">
            <WeatherIcon code={props.data.weather[0].icon}/>
          </div>
          <div className="description">
            {description()}
          </div>
          <div className="temperature">
            <strong>{celsiusMax}°C</strong> | {celsiusMin}°C
          </div>
        </div>
      );
  }
}

export default ForecastPreview;