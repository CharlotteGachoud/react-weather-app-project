import React from "react";

function ChangeImage(props){

  if (props.temperature >= 20 ){
  return(
    <div className="jaws">
      <iframe title="jaws" src="https://giphy.com/embed/5pYdt8lWiM2qzyXuVS" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thecoolidge-jaws-coolidge-corner-theatre-5pYdt8lWiM2qzyXuVS">Via Giphy</a></p>
    </div>
  );
  } else if(props.temperature >= 15 ){
    return(
    <div className="illustration">
      <iframe title="alergies" src="https://giphy.com/embed/l2JehsPxGvhrsRuBq" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-8-the-simpsons-8x2-l2JehsPxGvhrsRuBq">Via Giphy</a></p>
    </div>
    );
  } else if(props.temperature >= 10 ){
    return(
    <div className="leaves">
      <iframe title="Leaf" src="https://giphy.com/embed/xFnAObsU5nMrUUC3HX" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-aww-eyebleach-xFnAObsU5nMrUUC3HX">Via Giphy</a></p>
    </div>
    );
  }else {
    return(
    <div className="titanic">
      <iframe title="Titanic" src="https://giphy.com/embed/grO6JXGhRUFBeRGKFA" width="300" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/titanic-jackandrose-titanicdoor-grO6JXGhRUFBeRGKFA">Via Giphy</a></p>
    </div>
    );
  }
}

export default ChangeImage;