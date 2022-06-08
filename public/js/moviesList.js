let body = document.querySelector("body");
let title = document.querySelector("h1");
let links = document.querySelectorAll("li a");

let modo = confirm("¿Desea activar el modo oscuro?");

if (modo) {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.add("fondoMoviesList");

  for (const a of links) {
    a.style.color = "#fff";
  }
}

title.innerHTML += " LISTADO DE PELICULAS";
title.style.color = "#fff";
title.style.backgroundColor = "teal";
title.style.padding = "20px";
