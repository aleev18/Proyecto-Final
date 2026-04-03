// RELOJ
function actualizarReloj() {
  const reloj = document.getElementById("reloj");

  if (!reloj) return;

  const ahora = new Date();

  reloj.textContent = ahora.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


// MODO CLARO / OSCURO MÁS RÁPIDO
const botonModo = document.getElementById("modo-btn");
const icono = document.getElementById("icono-modo");

if (botonModo) {
  botonModo.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      icono.src = "img/luna.png";
    } else {
      icono.src = "img/sol.png";
    }
  });
}


// ZOOM DE IMÁGENES
const cards = document.querySelectorAll(".zoomable");
const modal = document.getElementById("modal-img");
const imagenModal = document.getElementById("img-ampliada");
const cerrar = document.querySelector(".cerrar-modal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");

    imagenModal.src = img.src;
    imagenModal.alt = img.alt;

    modal.classList.add("activo");
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.remove("activo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("activo");
  }
});
