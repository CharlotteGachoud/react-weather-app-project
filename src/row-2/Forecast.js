import React, { useState }  from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import Loader from 'react-loader-spinner'
import "./Forecast.css";

function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

   function displayForecast(response){
     setForecast(response.data)
     setLoaded(true);
  }
  
  if (loaded && props.data.lat === forecast.lat && props.data.lon === forecast.lon){
    return (
      <div className="Forecast row">
          <ForecastPreview data={forecast.daily[1]} unit={props.unit}/>
          <ForecastPreview data={forecast.daily[2]} unit={props.unit}/>
          <ForecastPreview data={forecast.daily[3]} unit={props.unit}/>
          <ForecastPreview data={forecast.daily[4]} unit={props.unit}/>
          <ForecastPreview data={forecast.daily[5]} unit={props.unit}/>
          <ForecastPreview data={forecast.daily[6]} unit={props.unit}/>
      </div>
    );
  } else{
    let apiKey = "2c7531b6bc89a83ae4af0fd1004343c9";
    let unit = "metric";
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayForecast);
    return (
        <div className="float-left">
          <Loader
          type="BallTriangle"
          color="#5A9BD4"
          height={60}
          width={60}
        />
      </div>
    );
  }
}

export default Forecast;