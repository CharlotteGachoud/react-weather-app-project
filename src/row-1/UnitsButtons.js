import React from "react";

function UnitsButtons(){
  return(
    <div className="UnitsButtons">
      <button type="button" class="btn btn-primary btn-units celsius active">°C</button>
      <button type="button" class="btn btn-primary btn-units fahrenheit">°F</button>
    </div>
  )
}

export default UnitsButtons;