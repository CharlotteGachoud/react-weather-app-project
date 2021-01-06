import React from "react";
import ChangeImage from "./ChangeImage";

function MiddleSection(props){
  return(
    <div className="MiddleSection">
      <ChangeImage temperature={props.data.temperature}/>
    </div>
  )
}

export default MiddleSection;