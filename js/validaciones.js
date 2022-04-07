const inputs = document.querySelectorAll("input");
const enviar = document.querySelector(".enviarMsj");

var validado;
var inputsValidos = [];

inputs.forEach(input => {
  input.addEventListener("blur", validarInput);

  function validarInput() {
    if (this.validity.valid) {
      validado = true;
    } else {
      validado = false;
    }
    return validado;
  }
});

enviar.addEventListener("mouseover", () => {
  inputs.forEach(input => {
    if(validado){
      let formValido = true;
    } else return;
    enviar.classList.add("enviarMsjActivo");
  })
});