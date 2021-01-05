import React from "react";

function WeatherIcon({code, alt}){
      const codeMapping = {
        "01d": "Icons/animated_day.svg",
        "01n": "Icons/animated_night.svg",
        "02d": "Icons/animated_cloudy-day-1.svg",
        "02n": "Icons/animated_cloudy-night-1.svg",
        "03d": "Icons/animated_cloudy-day-2.svg",
        "03n": "Icons/animated_cloudy-night-2.svg",
        "04d": "Icons/animated_cloudy.svg",
        "04n": "Icons/animated_cloudy.svg",
        "09d": "Icons/animated_rainy-6.svg",
        "09n": "Icons/animated_rainy-6.svg",
        "10d": "Icons/animated_rainy-3.svg",
        "10n": "Icons/animated_rainy-5.svg",
        "11d": "Icons/animated_thunder.svg",
        "11n": "Icons/animated_thunder.svg",
        "13d": "Icons/animated_snowy-3.svg",
        "13n": "Icons/animated_snowy-6.svg",
        "50d": "Icons/animated_cloudy.svg",
        "50n": "Icons/animated_cloudy.svg",
      }

      return(
        <div className="weatherIcons">
          <img src={codeMapping[code]} alt={alt} className="weathericon" />
        </div>
      );
}

export default WeatherIcon;