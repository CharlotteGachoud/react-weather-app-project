import React from "react";

function FormattedDate(props){
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let day = days[props.date.getDay()];

    let months = [
    "January",
    "Februar",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[props.date.getMonth()];
  
  let date = props.date.getDate();
  return (
  <div className="FormattedDate">
    {day} {month} {date}
  </div>
  );
}

export default FormattedDate;