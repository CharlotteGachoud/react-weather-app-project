import React from "react";

function FormattedHour(props){
  let hours = props.date.getHours();
    if (hours < 10){
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
   if (minutes < 10){
    minutes = `0${minutes}`;
  }
  return (
  <div className="FormattedHour">
    {hours}:{minutes}
  </div>
  );
}

export default FormattedHour;