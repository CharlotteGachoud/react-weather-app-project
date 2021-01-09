import React from "react";
import WeatherIcon from "../row-2/Column-1/WeatherIcon";
import "./ForecastPreview.css";


function ForecastPreview(props){
  let date = new Date(props.data.dt * 1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
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
          <span className="max-temp">{fahrenheitMax}</span><span className="unitMax">°F</span> <span className="separation">|</span> <span className="min-temp">{fahrenheitMin}</span><span className="unitMin">°F</span>
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
            <span className="max-temp">{celsiusMax}</span><span className="unitMax">°C</span> <span className="separation">|</span> <span className="min-temp">{celsiusMin}</span><span className="unitMin">°C</span>
          </div>
        </div>
      );
  }
}

export default ForecastPreview;