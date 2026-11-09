// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");
// Hent knapperne/accordion-elementerne
const forsteDetails = document.querySelector("#details-forste");
const andenDetails = document.querySelector("#details-anden");
const tredjeDetails = document.querySelector("#details-tredje");

const layerForste = document.querySelector("#forste");
const layerAnden = document.querySelector("#anden");
const layerTredje = document.querySelector("#tredje");

// Funktion til at skjule alle lag
function hideAllLayers() {
  if (layerForste) layerForste.classList.remove("active");
  if (layerAnden) layerAnden.classList.remove("active");
  if (layerTredje) layerTredje.classList.remove("active");
}

// Lyt efter hvornår 10-18 åbnes
forsteDetails.addEventListener("toggle", () => {
  if (forsteDetails.open) {
    hideAllLayers();
    layerForste.classList.add("active");
  }
});

// Lyt efter hvornår 18-02 åbnes
andenDetails.addEventListener("toggle", () => {
  if (andenDetails.open) {
    hideAllLayers();
    layerAnden.classList.add("active");
  }
});

// Lyt efter hvornår 02-10 åbnes
tredjeDetails.addEventListener("toggle", () => {
  if (tredjeDetails.open) {
    hideAllLayers();
    layerTredje.classList.add("active");
  }
});
// Sørg for at første stykke vises fra start

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
