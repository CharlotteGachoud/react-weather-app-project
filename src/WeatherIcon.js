import React from "react";

function WeatherIcon({code, alt}){
      const codeMapping = {
        "01d": "Icons/clear-day.svg",
        "01n": "Icons/clear-night.svg",
        "02d": "Icons/cloudy.svg",
        "02n": "Icons/cloudy.svg",
        "03d": "Icons/cloudy.svg",
        "03n": "Icons/cloudy.svg",
        "04d": "Icons/overcast.svg",
        "04n": "Icons/overcast.svg",
        "09d": "Icons/rain.svg",
        "09n": "Icons/rain.svg",
        "10d": "Icons/partly-cloudy-day-rain.svg",
        "10n": "Icons/partly-cloudy-night-rain.svg",
        "11d": "Icons/thunderstorms-day.svg",
        "11n": "Icons/thunderstorms-night.svg",
        "13d": "Icons/partly-cloudy-day-snow.svg",
        "13n": "Icons/partly-cloudy-night-snow.svg",
        "50d": "Icons/mist.svg",
        "50n": "Icons/mist.svg",
      }

      return(
        <div className="weatherIcons">
          <img src={codeMapping[code]} alt={alt} className="weathericon" />
        </div>
      );
}

export default WeatherIcon;