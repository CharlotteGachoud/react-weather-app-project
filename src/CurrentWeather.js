import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";

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
                      <span className="actual-temp">{props.data.temperature}</span>
                      °C
                    </div>
                    <img
                      src={props.data.mainIcon}
                      alt={props.data.mainDescription}
                      className="main-icon"
                    />
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