import React from "react";
import clearDay from "./icons/clearDay.svg";
import clearNight from "./icons/clearNight.svg";
import cloudy from "./icons/cloudy.svg";
import overcast from "./icons/overcast.svg";
import rain from "./icons/rain.svg";
import partlyCloudyDayRain from "./icons/partlyCloudyDayRain.svg";
import partlyCloudyNightRain from "./icons/partlyCloudyNightRain.svg";
import thunderstormsDay from "./icons/thunderstormsDay.svg";
import thunderstormsNight from "./icons/thunderstormsNight.svg";
import partlyCloudyDaySnow from "./icons/partlyCloudyDaySnow.svg";
import partlyCloudyNightSnow from "./icons/partlyCloudyNightSnow.svg";
import mist from "./icons/mist.svg";

function WeatherIcon(props){
      const codeMapping = {
        "01d": "clearDay",
        "01n": "clearNight",
        "02d": "cloudy",
        "02n": "cloudy",
        "03d": "cloudy",
        "03n": "cloudy",
        "04d": "overcast",
        "04n": "overcast",
        "09d": "rain",
        "09n": "rain",
        "10d": "partlyCloudyDayRain",
        "10n": "partlyCloudyNightRain",
        "11d": "thunderstormsDay",
        "11n": "thunderstormsNight",
        "13d": "partlyCloudyDaySnow",
        "13n": "partlyCloudyNightSnow",
        "50d": "mist",
        "50n": "mist",
      }

      return(
        <div className="weatherIcons">
          <img src={codeMapping[props.code]} alt={alt}/>
        </div>
      );
}

export default WeatherIcon;