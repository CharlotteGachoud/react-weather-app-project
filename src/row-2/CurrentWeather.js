import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherIcon from "./WeatherIcon";
import ChangeUnit from "./ChangeUnit";


function CurrentWeather(props){

  
  return(
    <div className="CurrentWeather">
      <h1 className="city">{props.data.city}</h1>
                    <div className="date-time">
                      <p className="last-uptdated">Last updated</p>
                      <p className="current-date">
                        <FormattedDate date={props.data.date}/>
                      </p>
                      <p className="time">
                        <FormattedHour date={props.data.date}/>
                      </p>
                    </div>
                          <div className="current-temp">
                            <ChangeUnit celsius={props.data.temperature}/>
                          </div>

                    <div className="icons">
                      <WeatherIcon code={props.data.icon} alt={props.data.mainDescription}/>
                    </div>
                    <div className="current-description">
                      {props.data.mainDescription}
                    </div>
                    <div className="real-feel">
                      Real feel
                      <br />
                      <span className="real-feel-temp">{props.data.realFeel}</span>
                      <span className="real-feel-unit">°C</span>
                    </div>
    </div>
  )
}

export default CurrentWeather;