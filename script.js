function validarLogin() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  var mensagemErro = document.getElementById('mensagemErro');

  // Verificar o usuário e senha
  if (usuario === 'viniadm' && senha === 'viniadm') {
    alert('Login bem-sucedido para ViniADM');
    // Aqui você pode redirecionar o usuário para uma página de sucesso, por exemplo
  } else if (usuario === 'leneadm' && senha === 'leneadm') {
    alert('Login bem-sucedido para LeneADM');
    // Aqui você pode redirecionar o usuário para uma página de sucesso, por exemplo
  } else {
    mensagemErro.innerHTML = 'Usuário ou senha inválidos.';
  }

  // Impedir que o formulário seja enviado
  return false;
}

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
    activeElement = "email";
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