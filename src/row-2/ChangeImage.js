import React from "react";

function ChangeImage(props){

  if (props.temperature >= 20 ){
  return(
    <div className="jaws">
      <iframe title="jaws" src="https://giphy.com/embed/tNaQg4kIR8dOw" width="400" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/challenger-halloween-challenger23-jaws-tNaQg4kIR8dOw">via GIPHY</a></p>
      <p className="sentence">
        Watch out for Bruce if you go for a swim 🦈
      </p>
    </div>
  );
  } else if(props.temperature >= 15 ){
    return(
    <div className="illustration">
      <iframe title="alergies" src="https://giphy.com/embed/l2JehsPxGvhrsRuBq" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-8-the-simpsons-8x2-l2JehsPxGvhrsRuBq">via GIPHY</a></p>
      <p className="sentence">
        Yay it's allergies season again!!!
      </p>
    </div>
    );
  } else if(props.temperature >= 10 ){
    return(
    <div className="leaves">
      <iframe title="Leaf" src="https://giphy.com/embed/xFnAObsU5nMrUUC3HX" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-aww-eyebleach-xFnAObsU5nMrUUC3HX">via GIPHY</a></p>
      <p className="sentence">
        Oh my god! are these..? ...LEAVES 🤪
      </p>
    </div>
    );
  }else {
    return(
    <div className="titanic">
      <iframe title="Titanic" src="https://giphy.com/embed/grO6JXGhRUFBeRGKFA" width="400" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/titanic-jackandrose-titanicdoor-grO6JXGhRUFBeRGKFA">via GIPHY</a></p>
      <p className="sentence">
        Aaaah Come on! <br/>There was enough space on that door... 
      </p>
    </div>
    );
  }
}

export default ChangeImage;