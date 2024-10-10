const boton = document.querySelector("button");

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    inputNombre.setAttribute("disabled", true);
    inputApellido.setAttribute("disabled", true);
    inputEmail.setAttribute("disabled", true);
    inputMensaje.setAttribute("disabled", true);
    alert('Se ha registrado correctamente el cliente: ' + inputNombre.value);
});