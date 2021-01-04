import React, { useState } from "react";
import UnitsButtons from "./UnitsButtons";
import CurrentWeather from "./CurrentWeather";
import Description from "./Description";
import LocalInfo from "./LocalInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";
import Loader from 'react-loader-spinner'
import "./Weather.css";

function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
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
            <div className="row search-units">
              <div className="col-10">
                <form className="search-form" onSubmit={handleSubmit}>
                  <div className="row search-bar">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control city-search w-100"
                        placeholder="Enter a city"
                        autoComplete="off"
                        autoFocus="on"
                        onChange={handleCitySearch}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        className="btn btn-primary btn-search w-100"
                        value="🔎 Search"
                      />
                    </div>
                    <div className="col-3">
                      <input type="submit" className="btn btn-primary btn-location w-100" value="📍 Current location"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-2">
                < UnitsButtons />
              </div>
            </div>
            
            <div className="row">
              <div className="col columns">
                <CurrentWeather data={weatherData} />
              </div>
              <div className="col columns">
                <Description data={weatherData}/>
              </div>
              <div className="col columns">
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

export default Weather;