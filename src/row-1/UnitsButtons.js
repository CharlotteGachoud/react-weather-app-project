import React from "react";

function UnitsButtons(props){
  function showFahrenheit(event){
    event.preventDefault();
    props.setUnit("imperial");
  }

  function showCelsius(event){
    event.preventDefault();
    props.setUnit("metric");
  }

  return(
    <div className="UnitsButtons">
      <button type="submit" class="btn btn-primary btn-units celsius" onClick={showCelsius}>°C</button>
      <button type="submit" class="btn btn-primary btn-units fahrenheit" onClick={showFahrenheit}>°F</button>
    </div>
  )
}

export default UnitsButtons;