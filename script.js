function showAlert() {
  alert("Hola, esta es una alerta de CLICK CON JavaScript!");
}

function showAlert1() {
  alert("Hola, esta es una alerta con doble click");
}

function showAlert2() {
  alert("Hiciste click en mi!!!");
}

function sumar(num1, num2) {
  let resultado = num1 + num2;
  alert(resultado);
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
