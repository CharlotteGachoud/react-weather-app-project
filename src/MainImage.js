import React from "react";

function MainImage(props){
  return(
    <div className="MainImage">
      <img
        src={props.data.imgMain}
        alt="Scenary"
        className="illustration"
      />
      <p className="sentence">
        <em>{props.data.sentence}</em>
      </p>
    </div>
  )
}

export default MainImage;