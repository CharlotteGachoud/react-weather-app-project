import React, { useState }  from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

   function displayForecast(response){
     console.log(response.data);
     setForecast(response.data)
     setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name){
    return (
      <div className="Forecast row">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />
          <ForecastPreview data={forecast.list[2]} />
          <ForecastPreview data={forecast.list[3]} />
          <ForecastPreview data={forecast.list[4]} />
          <ForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else{
    let apiKey = "2c7531b6bc89a83ae4af0fd1004343c9";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}

export default Forecast;