import React from "react";

function ChangeSentence(props){

  if (props.sentence >=20 ){
  return(
    <div className="sentence">
      <p>
        Watch out for Bruce if you go for a swim 🦈
      </p>
    </div>
  );
  } else if(props.sentence >= 15 ){
    return(
    <div className="sentence">
      <p>
        Yay it's allergies season again!!!
      </p>
    </div>
    );
  } else if(props.sentence >= 10 ){
    return(
    <div className="sentence">
      <p>
        Oh my god! Is that..? ...LEAVES 🤪
      </p>
    </div>
    );
  }else {
    return(
    <div className="sentence">
     <p>
        Aaaah Come on! There was enough space on that door... 
      </p> 
    </div>
    );
  }
}

export default ChangeSentence;