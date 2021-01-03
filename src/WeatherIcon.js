import React from "react";

function WeatherIcon({code, alt}){
      const codeMapping = {
        "01d": "./icons/clear-day.svg",
        "01n": "./icons/clear-night.svg",
        "02d": "./icons/cloudy.svg",
        "02n": "./icons/cloudy.svg",
        "03d": "./icons/cloudy.svg",
        "03n": "./icons/cloudy.svg",
        "04d": "./icons/overcast.svg",
        "04n": "./icons/overcast.svg",
        "09d": "./icons/rain.svg",
        "09n": "./icons/rain.svg",
        "10d": "./icons/partly-cloudy-day-rain.svg",
        "10n": "./icons/partly-cloudy-night-rain.svg",
        "11d": "./icons/thunderstorms-day.svg",
        "11n": "./icons/thunderstorms-night.svg",
        "13d": "./icons/partly-cloudy-day-snow.svg",
        "13n": "./icons/partly-cloudy-night-snow.svg",
        "50d": "./icons/mist.svg",
        "50n": "./icons/mist.svg",
      }

      return(
        <div className="weatherIcons">
          <img src={codeMapping[code]} alt={alt} className="weathericon" />
        </div>
      );
}

export default WeatherIcon;