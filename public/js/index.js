let main = document.querySelector("main");
let subtitulo = document.querySelector(".subtitulo");
let link = document.querySelector("a");
let parrafos = document.querySelectorAll("p");

let nombre = prompt("Ingrese su nombre:") || "INVITADO";
subtitulo.innerHTML += " " + nombre;

subtitulo.style.textTransform = "uppercase";

link.style.backgroundColor = "#E51B3E";
link.style.color = "#fff";

let confirmacion = confirm("¿Desea colocar un fondo de pantalla?");

confirmacion ? document.querySelector("body").classList.add("fondo") : null;

for (let entry of parrafos.entries()) {
  if ((entry[0] + 1) % 2 === 0) {
    entry[1].classList.add("destacadoPar");
  } else {
    entry[1].classList.add("destacadoImpar");
  }
}

main.style.display = "block";
