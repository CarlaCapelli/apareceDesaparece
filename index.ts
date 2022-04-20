let parDos = document.getElementById("p-2");
let btn = document.getElementById("boton");
let btn2 = document.getElementById("boton2");
btn?.addEventListener("click", function () {
  this.classList.toggle("ocultar");
  parDos?.classList.toggle("ocultar");
  btn2?.classList.toggle("ocultar");
});
btn2?.addEventListener("click", function () {
  this.classList.toggle("ocultar");
  parDos?.classList.toggle("ocultar");
  btn?.classList.toggle("ocultar");
});
