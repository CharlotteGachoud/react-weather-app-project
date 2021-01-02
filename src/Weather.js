import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      time: "10:00",
      sentence: "How about a nice cup of coco?",
      imgMain: "./images/balloons.svg"
    });
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h1 className="city">{weatherData.city}</h1>
                    <div className="date-time">
                      <p className="last-uptdated">Last updated</p>
                      <p className="current-date">
                        <FormattedDate date={weatherData.date}/>
                      </p>
                      <p className="time">
                        {weatherData.time}
                      </p>
                    </div>
                    <div className="current-temp">
                      <span className="actual-temp">{weatherData.temperature}</span>
                      °C
                    </div>
                    <img
                      src={weatherData.mainIcon}
                      alt={weatherData.mainDescription}
                      className="main-icon"
                    />
                    <div className="current-description">
                      {weatherData.mainDescription}
                    </div>
                    <div className="real-feel">
                      Real feel
                      <br />
                      <span className="real-feel-temp">{weatherData.realFeel}</span>
                      <span className="real-feel-unit">°C</span>
                    </div>
                  </div>
    
                  <div className="col">
                    <div className="row">
                      <div className="col-3"/>
                      <div className="col-3">
                        <input type="button" value="Metric" className="btn btn-primary btn-units active"/>
                      </div>
                      <div className="col-3">
                        <input type="button" value="Imperial" className="btn btn-primary btn-units"/>
                      </div>
                      <div className="col-3"/>
                    </div>
    
                    <img
                      src={weatherData.imgMain}
                      alt="Scenary"
                      className="illustration"
                    />
                    <p className="sentence">
                      <em>{weatherData.sentence}</em>
                    </p>
                  </div>
    
                  <div className="col">
                    <form className="search-form">
                      <div className="row search-bar">
                        <div className="col-8">
                            <input
                              type="text"
                              className="form-control city-search w-100"
                              placeholder="Enter a city"
                              autoComplete="off"
                              autoFocus="on"
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
                      <div className="info">
                        <div className="humidity">
                          <div className="specifics-info">
                            Humidity
                          </div>
                          <div className ="info-data humidity-data">
                            💧 {weatherData.humidity}%
                          </div>
                        </div>
                        <div className="wind">
                          <div className="specifics-info">
                            Wind
                          </div>
                          <div className ="info-data">
                            💨 {weatherData.wind} km/h
                          </div>
                        </div>
                        <div className="sunrise">
                          <div className="specifics-info">
                            Sunrise
                          </div>
                          <div className ="info-data">
                            🌄 {weatherData.sunriseTime}
                          </div>
                        </div>
                        <div className="sunset">
                          <div className="specifics-info">
                            Sunset
                          </div>
                          <div className ="info-data">
                            🌇 {weatherData.sunsetTime}
                          </div>
                        </div>
                      </div> 
    
                  </div>
                </div>
                <div className="row forecast">
                  <div className="col">
                      <p className="week-days">
                        Tuesday
                      </p>
                      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                        Broken clouds
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">6°C</span> {" "}| {" "}
                          <span className="min-temp">2°C</span>
                        </div>
                       </div> 
                  </div>
                  <div className="col">
                    <p className="week-days">
                        Wednesday
                      </p>
                      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                        Broken clouds
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">7°C</span> {" "}| {" "}
                          <span className="min-temp">4°C</span>
                        </div>
                       </div> 
                  </div>
                  <div className="col"><p className="week-days">
                        Thursday
                      </p>
                      <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                        few clouds
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">6°C</span> {" "}| {" "}
                          <span className="min-temp">2°C</span>
                        </div>
                       </div> </div>
                  <div className="col"><p className="week-days">
                        Friday
                      </p>
                      <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                        clear sky
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">11°C</span> {" "}| {" "}
                          <span className="min-temp">5°C</span>
                        </div>
                       </div> </div>
                  <div className="col"><p className="week-days">
                        Saturday
                      </p>
                      <img src="http://openweathermap.org/img/wn/03n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                         	scattered clouds 
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">8°C</span> {" "}| {" "}
                          <span className="min-temp">3°C</span>
                        </div>
                       </div> </div>
                  <div className="col"><p className="week-days">
                        Sunday
                      </p>
                      <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="weather icon" className="forecast-icon"/>
                      <p className="forecast-description">
                        rain
                      </p>
                      <div className="row min-max-temp">
                        <div className="col">
                          <span className="max-temp">5°C</span> {" "}| {" "}
                          <span className="min-temp">1°C</span>
                        </div>
                       </div> </div>
                </div>
              </div>
            </div>
            <div className="code-by">
              <a href="https://github.com/CharlotteGachoud/react-weather-app-project" className="open-source-link" target="_blank" rel="noreferrer">
                Open-source code
              </a>{" "}
              by{" "}
              <a href="https://www.linkedin.com/in/charlotte-gachoud-5210811b9/" target="_blank" rel="noreferrer">
                Charlotte Gachoud
              </a>
            </div>
      </div>
    );
  } else {
      const apiKey = "2c7531b6bc89a83ae4af0fd1004343c9";
      let unit = "metric";
      let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
      axios.get(apiUrl).then(handleResponse);
      return(
        "Loading..."
      );
  }
}

export default Weather;