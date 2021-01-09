import React, { useState } from "react";
import UnitsButtons from "./row-1/UnitsButtons";
import CurrentWeather from "./row-2/Column-1/CurrentWeather";
import MiddleSection from "./row-2/Column-2/MiddleSection";
import LocalInfo from "./row-2/Column-3/LocalInfo";
import Forecast from "./row-3/Forecast";
import Footer from "./row-3/Footer";
import axios from "axios";
import Loader from 'react-loader-spinner'
import "./Weather.css";

function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius")

  function handleResponse(response){

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      realFeel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      sunrise: response.data.sys.sunrise + response.data.timezone,
      sunset: response.data.sys.sunset + response.data.timezone,
      date: new Date(response.data.dt *1000),
      amPmTime: new Date(response.data.dt *1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function search(){
    const apiKey = "027401657e14d2712c8487adaadbd48b";
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

  function findLocation(position){
    const apiKey = "027401657e14d2712c8487adaadbd48b";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=en`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findLocation)
  }

  let form =  <form className="search-form" onSubmit={handleSubmit}>
                <div className="row search-bar">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control city-search"
                      placeholder="Enter a city"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCitySearch}
                    />
                  </div>
                  <div className="col-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-search"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-location"
                      onClick={handleLocation}
                    >
                      <i class="fas fa-map-marker-alt"></i>
                    </button>
                  </div>
                  <div className="col-2">
                    < UnitsButtons setUnit={setUnit}/>
                  </div>
                </div>
              </form>;

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <div className="row search-units">
              <div className="col-12">
               {form}
              </div>
            </div>
            
            <div className="row">
              <div className="col columns">
                <CurrentWeather data={weatherData} unit={unit} setUnit={setUnit} />
              </div>

              <div className="col columns">
                <MiddleSection data={weatherData}/>
              </div>

              <div className="col columns">
                <LocalInfo data={weatherData} unit={unit} setUnit={setUnit} />
              </div>
            </div>

            <hr/>

            <div className="forecast">
              <Forecast city={weatherData.city} data={weatherData} unit={unit} setUnit={setUnit}/>
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