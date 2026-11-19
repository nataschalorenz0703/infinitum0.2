// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

if (svgPlaceholder) {
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
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);

  const purpose = params.get("purpose") || "both";
  const wantsTattoo = params.get("wants_tattoo") || "no";
  const style = params.get("tattoo_style") || "dont-know";

  const typeEl = document.querySelector("#pass-type");
  const purposeEl = document.querySelector("#pass-purpose");
  const tattooEl = document.querySelector("#pass-tattoo");
  const styleEl = document.querySelector("#pass-style");
  const messageEl = document.querySelector("#pass-message");

  // Variation 1: pass-type efter formål
  if (purpose === "techno") {
    typeEl.textContent = "Personal Event Pass";
    purposeEl.textContent = "You're here for the music. Amazing! We have a 24 hour line-up of 6 different DJs. You can check who is playing when on the DJ timetable.";
  } else if (purpose === "tattoos") {
    typeEl.textContent = "Personal Event Pass";
    purposeEl.textContent = "You're here for the ink. Exciting! The different tattoo artists are available for you from 10 AM until 10 PM on the 10th.";
  } else {
    typeEl.textContent = "Personal Event Pass";
    purposeEl.textContent = "You're here for both techno and tattoos. Great! We have 24 hour line-up of 6 different DJs. And the different tattoo artists are available for you from 10 AM until 10 PM on the 10th.   ";
  }

  // Tattoo-ønske
  const tattooTekster = {
    yes: "Yes, book your spot.",
    maybe: "Maybe, come talk to us.",
    no: "Not this time.",
  };
  tattooEl.textContent = tattooTekster[wantsTattoo] || tattooTekster.no;

  // Variation 2: stil og kunstner
  const stilTekster = {
    "black work": "Laura · Blackwork",
    "old school": "Ars · Old School ",
    "neo traditionel": "Nastia · Neo Traditional",
    abstract: "Poli · Abstract",
    "dont-know": "See all the artists and their styles on the Home page. ",
  };
  styleEl.textContent = stilTekster[style] || stilTekster["dont-know"];

  // Kombination: kun techno og ingen tattoo -> skjul tattoo-felterne
  const tattooCell = tattooEl.closest(".pass-cell");
  const styleCell = styleEl.closest(".pass-cell");

  if (purpose === "techno" && wantsTattoo === "no") {
    tattooCell.hidden = true;
    styleCell.hidden = true;
    messageEl.textContent = "See you on the dancefloor.";
  } else {
    messageEl.textContent = "See you at Infinitum!";
  }

  // Data-attributter til CSS
  opsamlingPlaceholder.dataset.purpose = purpose;
  opsamlingPlaceholder.dataset.style = style.replaceAll(" ", "-");
}
