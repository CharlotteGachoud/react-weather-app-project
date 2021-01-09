import React from "react";
import "./Sunset.css";

function Sunset(props) {
    let setTime = new Date(props.sunset * 1000);
    let setHour = setTime.getUTCHours();
    if (setHour < 10) {setHour = `0${setHour}`};
    let setMinutes = setTime.getUTCMinutes();
    if (setMinutes < 10) {setMinutes = `0${setMinutes}`};

    return(
      <div className="Sunrise">
        <img src="Images/sunset.svg" alt="sunset" className="icon-sun"/>
        {setHour}:{setMinutes}
      </div>
    );
}

export default Sunset;