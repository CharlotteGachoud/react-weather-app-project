import React from "react";
import ChangeImage from "./ChangeImage";
import ChangeSentence from "./ChangeSentence";

function MiddleSection(props){
  return(
    <div className="MiddleSection">
      <ChangeImage temperature={props.data.temperature}/>
      <div className="sentence">
        <em><ChangeSentence sentence={props.data.sentence}/></em>
      </div>
    </div>
  )
}

export default MiddleSection;