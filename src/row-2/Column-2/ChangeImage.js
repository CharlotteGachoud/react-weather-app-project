import React from "react";
import "./ChangeImage.css";

function ChangeImage(props){

  if (props.temperature >= 20 ){
  return(
    <div className="ChangeImage">
      <iframe title="Jaws" src="https://giphy.com/embed/tNaQg4kIR8dOw" width="400" height="204" frameBorder="0" className="giphy jaws" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/challenger-halloween-challenger23-jaws-tNaQg4kIR8dOw" className="via-giphy">via GIPHY</a></p>
      <p className="sentence">
        “Just when you thought it was safe
        <br/>
        <strong> to go back in the water...</strong>” 🦈
        <br/>
        <small>― Peter Benchley, Jaws</small>
      </p>
    </div>
  );
  } else if(props.temperature >= 15 ){
    return(
    <div className="ChangeImage">
      <iframe title="Allergies" src="https://giphy.com/embed/l2JehsPxGvhrsRuBq" width="350" height="350" frameBorder="0" className="giphy allergies" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-8-the-simpsons-8x2-l2JehsPxGvhrsRuBq" className="via-giphy">via GIPHY</a></p>
      <p className="poem">
        With just one glimps you make my eyes water.
        <br/>
        Caused not by your beauty
        <br/>
        but by your tingling yellow powder.
        <br/>
        <strong>Thank F#@k I'm not a bee!</strong>
      </p>
    </div>
    );
  } else if(props.temperature >= 10 ){
    return(
    <div className="ChangeImage">
      <iframe title="Leaves" src="https://giphy.com/embed/xFnAObsU5nMrUUC3HX" width="400" height="400" frameBorder="0" className="giphy leaves" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-aww-eyebleach-xFnAObsU5nMrUUC3HX" className="via-giphy">via GIPHY</a></p>
      <p className="sentence">
        Oh my god! Are these..? <strong>...LEAVES</strong> 🤪
      </p>
    </div>
    );
  }else if(props.temperature >= 0){
      return(
        <div className="ChangeImage">
          <iframe title="cozy blanket" src="https://giphy.com/embed/7n8CrwJfRhBe44K3K8" width="480" height="270" frameBorder="0" className="giphy cozy-blanket" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spring-warm-cozyblanket-7n8CrwJfRhBe44K3K8" className="via-giphy">via GIPHY</a></p>
          <p className="sentence">
            Come to the dark side!
            <br />
              We have blankets...{" "}
            <strong>
              and cookies 🍪
              </strong>
          </p>
        </div>
      );
  }else {
    return(
    <div className="ChangeImage">
      <iframe title="Titanic" src="https://giphy.com/embed/grO6JXGhRUFBeRGKFA" width="400" height="200" frameBorder="0" className="giphy titanic" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/titanic-jackandrose-titanicdoor-grO6JXGhRUFBeRGKFA" className="via-giphy">via GIPHY</a></p>
      <p className="sentence">
        Aaaah Come on! <br/>
        <strong>
          There was enough space{" "} 
          </strong>
          on that door... 
      </p>
    </div>
    );
  }
}

export default ChangeImage;