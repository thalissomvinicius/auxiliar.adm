function onEmailBlur(e) {
  activeElement = null;
  setTimeout(function( ) {
    if(activeElement == "email") {
    } else {
      if(e.target.value == "") {
          e.target.parentElement.classList
            .remove("focusWithText")
      }
      //startBlinking();
      resetFace();
    }
  }, 100);
}


function onEmailLabelClick(e){
  activeElement = "text";
}

function onPassordFocus(e) {
  activeElement = "password"
  if(!eyesCovered) {
    coverEyes0( );
  }
}


function stopBlinking( ) {
  blinking.kill();
  blinking = null;
  TweenMax.set( [eyeL, eyeR],
                {scaleY: eyeScale});
}

function getRandomInt(max) {
  return Math.floor(Math.random()
                   *Math.floor(max));
}