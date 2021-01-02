import React from "react";
import "./Weather.css";

function Weather(){
  let weatherData = {
    city: "New York",
    temperature: 7,
    date: "Monday December 21",
    time: "16:25",
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    description: "broken clouds",
    realFeel: 4,
    imgMain: "./images/Balloons.svg",
    sentence: "How about a nice cup of coco?",
    humidity: 80,
    wind: 5,
    sunriseTime: "8:06",
    sunsetTime: "16:45"
  };

  return (
    <div className="Weather">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h1 className="city">{weatherData.city}</h1>
                  <div className="date-time">
                    <p className="last-uptdated">Last updated</p>
                    <p className="current-date">{weatherData.date}</p>
                    <p className="time">{weatherData.time}</p>
                  </div>
                  <div className="current-temp">
                    <span className="actual-temp">{weatherData.temperature}</span>
                    °C
                  </div>
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="main-icon"
                  />
                  <div className="current-description">
                    {weatherData.description}
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
                    <button type="button" className="btn btn-primary btn-units">
                      <a href="/" className="active metric">
                        Metric
                      </a>
                      <span className="separation"> | </span>
                      <a href="/" className="imperial">
                        Imperial
                      </a>
                    </button>
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
                      <div className="local-info">
                        <div className="specifics-info">
                          Humidity
                        </div>
                        <div className ="info-data humidity-data">
                          💧 {weatherData.humidity}%
                        </div>
                      </div>
                      <div className="local-info">
                        <div className="specifics-info">
                          Wind
                        </div>
                        <div className ="info-data">
                          💨 {weatherData.wind} km/h
                        </div>
                      </div>
                      <div className="local-info">
                        <div className="specifics-info">
                          Sunrise
                        </div>
                        <div className ="info-data">
                          🌄 {weatherData.sunriseTime}
                        </div>
                      </div>
                      <div className="local-info">
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
            <a href="https://github.com/CharlotteGachoud/weather-app-react" className="open-source-link" target="_blank" rel="noreferrer">
              Open-source code
            </a>{" "}
            by{" "}
            <a href="https://www.linkedin.com/in/charlotte-gachoud-5210811b9/" target="_blank" rel="noreferrer">
              Charlotte Gachoud
            </a>
          </div>
    </div>
  );
}

export default Weather;