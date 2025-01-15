//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
const maxNameChars = 50;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const maxSubjectChars = 50;
const maxMessageChars = 300;

function enviarMensaje() {
  let nombre = document.querySelector('#nombre').value;
  let email = document.querySelector('#email').value;
  let asunto = document.querySelector('#asunto').value;
  let mensaje = document.querySelector('#mensaje').value;

  if(validarCampos(nombre, email, asunto, mensaje)){
    enviarMail(nombre, email, asunto, mensaje);
  }
}

function enviarMail(nombre, email, asunto, mensaje) {
  let enviar = document.querySelector("#enviar");
  enviar.setAttribute(
      "href",
      `mailto:antonioree94@gmail.com?subject=Nombre:${nombre},E-mail: ${email},Asunto: ${asunto},&body=${mensaje}`
  );
  enviar.click();
}

function validarCampos(nombre, email, asunto, mensaje) {
  if(validarTextoVacio(nombre, 'nombre')) {
    return false;
  }

  if(validarCaracteresMaximos(nombre, maxNameChars,'nombre')){
    return false;
  }

  if(validarTextoVacio(email, 'email')) {
    return false;
  }

  if(!emailRegex.test(email)){
    alert('El campo de correo debe tener el formato de un correo electrónico.');
    return false;
  } 

  if(validarTextoVacio(asunto, 'asunto')) {
    return false;
  }
  
  if(validarCaracteresMaximos(asunto, maxSubjectChars,'asunto')){
    return false;
  }

  if(validarTextoVacio(mensaje, 'mensaje')) {
    return false;
  }
  
  if(validarCaracteresMaximos(mensaje, maxMessageChars,'mensaje')){
    return false;
  }

  return true;
}

function validarTextoVacio(texto, fieldName) {
  if(!texto.length) {
    alert(`El campo de ${fieldName} no puede estar vacío.`);
    return true;
  }
  return false;
}

function validarCaracteresMaximos(texto, maxChars, fieldName) {
  if(texto.length > maxChars){
    alert(`El campo de ${fieldName} no debe contener más de ${maxChars} caracteres.`);
    return true;
  }
  return false;
}