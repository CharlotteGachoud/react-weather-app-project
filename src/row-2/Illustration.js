import React from "react";

function Illustration(props){
  return(
    <div className="Illustration">
      <img src="./images/Winter_magic.svg" className="illustration" alt="Scenary"/>
      <p className="sentence">
        <em>{props.data.sentence}</em>
      </p>
    </div>
  )
}

export default Illustration;