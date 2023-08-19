function validar() {
    // Obtener los elementos del formulario por su id
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
  
    // Limpiar los posibles mensajes de error anteriores
    nombre.setCustomValidity("");
    email.setCustomValidity("");
    password.setCustomValidity("");
    confirm.setCustomValidity("");
  
    // Validar que los campos no estén vacíos
    if (nombre.value == "") {
      nombre.setCustomValidity("Por favor ingrese su nombre");
      return false;
    }
    
     if (email.value == "") {
      email.setCustomValidity("Por favor ingrese su correo electrónico");
      return false;
     }
  
     if (password.value == "") {
      password.setCustomValidity("Por favor ingrese su contraseña");
      return false;
     }
  
     if (confirm.value == "") {
      confirm.setCustomValidity("Por favor confirme su contraseña");
      return false;
     }
  
     // Validar que el correo electrónico tenga un formato válido
     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (!regex.test(email.value)) {
       email.setCustomValidity("Por favor ingrese un correo electrónico válido");
       return false;
     }
  
     // Validar que las contraseñas coincidan
     if (password.value != confirm.value) {
       confirm.setCustomValidity("Las contraseñas no coinciden");
       return false;
     }
  
     // Si todo está correcto, devolver true y permitir el envío
     return true;
  }