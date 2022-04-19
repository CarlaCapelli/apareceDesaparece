let parDos = document.getElementById("p-2");
let btn = document.getElementById("boton");

btn?.addEventListener("click", function () {
  this.classList.toggle("ocultar");
  parDos?.classList.toggle("ocultar");
});
