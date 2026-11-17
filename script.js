// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

const forsteDetails = document.querySelector("#details-forste");
const andenDetails = document.querySelector("#details-anden");
const tredjeDetails = document.querySelector("#details-tredje");

const layerForste = document.querySelector("#forste");
const layerAnden = document.querySelector("#anden");
const layerTredje = document.querySelector("#tredje");

function hideAllLayers() {
  if (layerForste) layerForste.classList.remove("active");
  if (layerAnden) layerAnden.classList.remove("active");
  if (layerTredje) layerTredje.classList.remove("active");
}

//10-18
forsteDetails.addEventListener("toggle", () => {
  if (forsteDetails.open) {
    hideAllLayers();
    layerForste.classList.add("active");
  }
});

// 18-02
andenDetails.addEventListener("toggle", () => {
  if (andenDetails.open) {
    hideAllLayers();
    layerAnden.classList.add("active");
  }
});

// 02-10
tredjeDetails.addEventListener("toggle", () => {
  if (tredjeDetails.open) {
    hideAllLayers();
    layerTredje.classList.add("active");
  }
});

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
