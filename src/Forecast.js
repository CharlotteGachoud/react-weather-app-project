import React from "react";

function Forecast(){
  return(
    <div className="Forecast">
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
                       </div>
                    </div>
      </div>
    </div>
  )
}

export default Forecast;