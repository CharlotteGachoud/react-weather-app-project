import React from "react";
import ChangeImage from "./ChangeImage";

function Illustration(props){
  return(
    <div className="Illustration">
      <ChangeImage temperature={props.data.temperature}/>
      <p className="sentence">
        <em>{props.data.sentence}</em>
      </p>
    </div>
  )
}

export default Illustration;