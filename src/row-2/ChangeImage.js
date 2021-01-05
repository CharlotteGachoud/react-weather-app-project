import React from "react";

function ChangeImage(props){

  if (props.temperature >= 20 ){
  return(
      <img src="Images/Pool.svg" className="illustration" alt="summer"/>
  );
  } else if(props.temperature >= 15 ){
    return(
     <img src="Images/Blooming.svg" className="illustration" alt="spring"/>
    );
  } else if(props.temperature >= 10 ){
    return(
     <img src="Images/Fall_is_coming.svg" className="illustration" alt="autumn"/>
    );
  }else {
    return(
     <img src="Images/Winter_magic.svg" className="illustration" alt="winter"/>
    );
  }
}

export default ChangeImage;