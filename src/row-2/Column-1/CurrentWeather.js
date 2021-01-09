import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHour from "./FormattedHour";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import RealFeel from "./RealFeel";
import "./CurrentWeather.css";


function CurrentWeather(props){

  
  return(
    <div className="CurrentWeather">
      <h1 className="city">{props.data.city}</h1>
                    <div className="date-time">
                      <p className="last-uptdated">Last updated</p>
                      <p className="date">
                        <FormattedDate date={props.data.date}/>
                      </p>
                      <p className="time">
                        <FormattedHour date={props.data.date}/>
                      </p>
                    </div>

                    <div className="temperature">
                      <CurrentTemp data={props.data} unit={props.unit}/>
                    </div>

                    <div className="icons">
                      <WeatherIcon code={props.data.icon} alt={props.data.mainDescription}/>
                    </div>
                    <div className="description">
                      {props.data.description}
                    </div>
                    <div className="real-feel">
                      Real feel
                      <br />
                      <span className="real-feel-temp">
                        <RealFeel data={props.data} unit={props.unit}/>
                      </span>{" "}
                    </div>
    </div>
  )
}

export default CurrentWeather;