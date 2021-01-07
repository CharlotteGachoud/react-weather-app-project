import React from "react";

function Sunset(props) {
    let setTime = new Date(props.sunset * 1000);
    let setHour = setTime.getUTCHours();
    if (setHour < 10) {setHour = `0${setHour}`};
    let setMinutes = setTime.getUTCMinutes();
    if (setMinutes < 10) {setMinutes = `0${setMinutes}`};

    return(
      <div className="Sunrise">
        🌇 {setHour}:{setMinutes}
      </div>
    );
}

export default Sunset;