import React, { useState } from "react";
import UnitsButtons from "./UnitsButtons";
import CurrentWeather from "./CurrentWeather";
import MainImage from "./MainImage";
import LocalInfo from "./LocalInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";
import "./Weather.css";

function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      mainIcon: response.data.weather[0].icon,
      mainDescription: response.data.weather[0].description,
      realFeel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      sunriseTime: "8:06",
      sunsetTime: "16:45",
      date: new Date(response.data.dt *1000),
      sentence: "How about a nice cup of coco?",
      imgMain: "./images/balloons.svg"
    });
  }

  function search(){
    const apiKey = "2c7531b6bc89a83ae4af0fd1004343c9";
    let unit = "metric";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCitySearch(event){
    setCity(event.target.value);
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <form className="search-form" onSubmit={handleSubmit}>
                  <div className="row search-bar">
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control city-search w-100"
                        placeholder="Enter a city"
                        autoComplete="off"
                        autoFocus="on"
                        onChange={handleCitySearch}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        type="submit"
                        className="btn btn-primary btn-search w-100"
                        value="Search"
                      />
                    </div>
                  </div>
              </form>
              < UnitsButtons />
            </div>
            
            <div className="row">
              <div className="col">
                <CurrentWeather data={weatherData} />
              </div>
              <div className="col">
                <MainImage data={weatherData}/>
              </div>
              <div className="col">
                <LocalInfo data={weatherData} />
              </div>
            </div>
            <div className="forecast">
              <Forecast />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  } else {
      search()
      return(
        "Loading..."
      );
  }
}

export default Weather;