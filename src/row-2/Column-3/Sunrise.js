import React from "react";
import "./Sunrise.css";

function Sunrise(props) {
    let riseTime = new Date(props.sunrise * 1000);
    let riseHour = riseTime.getUTCHours();
    if (riseHour < 10) {riseHour = `0${riseHour}`};
    let riseMinutes = riseTime.getUTCMinutes();
    if (riseMinutes < 10) {riseMinutes = `0${riseMinutes}`};

    return(
      <div className="Sunrise">
        <img src="Images/sunrise-filled.svg" alt="sunrise" className="icon-sun"/> {riseHour}:{riseMinutes}
      </div>
    );
}

export default Sunrise;