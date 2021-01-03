import React from "react";
import clear-day from "./icons/clear-day.svg";
import clear-night from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import overcast from "./icons/overcast.svg";
import rain from "./icons/rain.svg";
import partly-cloudy-day-rain from "./icons/partly-cloudy-day-rain.svg";
import partly-cloudy-night-rain from "./icons/partly-cloudy-night-rain.svg";
import thunderstorms-day from "./icons/thunderstorms-day.svg";
import thunderstorms-night from "./icons/thunderstorms-night.svg";
import partly-cloudy-day-snow from "./icons/partly-cloudy-day-snow.svg";
import partly-cloudy-night-snow from "./icons/partly-cloudy-night-snow.svg";
import mist from "./icons/mist.svg";

function WeatherIcon(props){
      const codeMapping = {
        "01d": "clear-day",
        "01n": "clear-night",
        "02d": "cloudy",
        "02n": "cloudy",
        "03d": "cloudy",
        "03n": "cloudy",
        "04d": "overcast",
        "04n": "overcast",
        "09d": "rain",
        "09n": "rain",
        "10d": "partly-cloudy-day-rain",
        "10n": "partly-cloudy-night-rain",
        "11d": "thunderstorms-day",
        "11n": "thunderstorms-night",
        "13d": "partly-cloudy-day-snow",
        "13n": "partly-cloudy-night-snow",
        "50d": "mist",
        "50n": "mist",
      }

      return(
        <div className="weatherIcons">
          <img src={codeMapping[props.code]} alt={alt} className="weatherIcon" />
        </div>
      );
}

export default WeatherIcon;