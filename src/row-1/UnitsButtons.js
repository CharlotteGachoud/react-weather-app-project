import React from "react";

function UnitsButtons(){
  return(
    <div className="UnitsButtons">
      <input type="button" value="°C" className="btn btn-primary btn-units celsius active"/>    
      <input type="button" value="°F" className="btn btn-primary btn-units fahrenheit"/>
    </div>
  )
}

export default UnitsButtons;