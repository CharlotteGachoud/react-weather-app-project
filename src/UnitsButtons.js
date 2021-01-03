import React from "react";

function UnitsButtons(){
  return(
    <div className="UnitsButtons">
      <input type="button" value="Metric" className="btn btn-primary btn-units active"/>
      <input type="button" value="Imperial" className="btn btn-primary btn-units"/>
    </div>
  )
}

export default UnitsButtons;