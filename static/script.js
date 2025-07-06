/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult modes inside popup
   Fully interactive: builds grid, opens popup, switches facts
   -------------------------------------------------------------------- */

/* ---------- colour map ------------------------------------------------ */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- minimal demo data (first 10 elements) -------------------- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen",   row:1, col:1,  state:"gas",   fun:"I help rockets blast off! 🚀"},
  {sym:"He", name:"Helium",     row:1, col:18, state:"gas",   fun:"I make balloons float! 🎈"},
  {sym:"Li", name:"Lithium",    row:2, col:1,  state:"solid", fun:"Tiny phone batteries love me! 🔋"},
  {sym:"Be", name:"Beryllium",  row:2, col:2,  state:"solid", fun:"I build light spacecraft! 🛸"},
  {sym:"B",  name:"Boron",      row:2, col:13, state:"solid", fun:"Hidden in slime‑making borax! 🧼"},
  {sym:"C",  name:"Carbon",     row:2, col:14, state:"solid", fun:"Diamonds & pencils are both me! 💎✏️"},
  {sym:"N",  name:"Nitrogen",   row:2, col:15, state:"gas",   fun:"78 % of the air is me! 🌬️"},
  {sym:"O",  name:"Oxygen",     row:2, col:16, state:"gas",   fun:"You breathe me every moment! ❤️"},
  {sym:"F",  name:"Fluorine",   row:2, col:17, state:"gas",   fun:"I guard your teeth! 😁"},
  {sym:"Ne", name:"Neon",       row:2, col:18, state:"gas",   fun:"I glow in neon signs! ✨"}
];

const ELEMENTS_ADULT = [
  {sym:"H",  name:"Hydrogen",   num:1,  mass:1.008,   row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",     num:2,  mass:4.0026,  row:1, col:18, state:"gas"},
  {sym:"Li", name:"Lithium",    num:3,  mass:6.94,    row:2, col:1,  state:"solid"},
  {sym:"Be", name:"Beryllium",  num:4,  mass:9.0122,  row:2, col:2,  state:"solid"},
  {sym:"B",  name:"Boron",      num:5,  mass:10.81,   row:2, col:13, state:"solid"},
  {sym:"C",  name:"Carbon",     num:6,  mass:12.011,  row:2, col:14, state:"solid"},
  {sym:"N",  name:"Nitrogen",   num:7,  mass:14.007,  row:2, col:15, state:"gas"},
  {sym:"O",  name:"Oxygen",     num:8,  mass:15.999,  row:2, col:16, state:"gas"},
  {sym:"F",  name:"Fluorine",   num:9,  mass:18.998,  row:2, col:17, state:"gas"},
  {sym:"Ne", name:"Neon",       num:10, mass:20.180,  row:2, col:18, state:"gas"}
];

/* ---------- globals -------------------------------------------------- */
let mode = "kid";      // current fact set
let table, popup, nameEl, factEl, symbolEl, kidBtn, adultBtn;

/* ---------- helpers -------------------------------------------------- */
const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

function buildGrid() {
  table.innerHTML = "";
  // Use adult list for positions (same coords for kid)
  ELEMENTS_ADULT.forEach(el => {
    const cell = document.createElement("div");
    cell.className  = "element";
    cell.textContent = el.sym;
    cell.style.background      = colour(el.state);
    cell.style.gridColumnStart = el.col;
    cell.style.gridRowStart    = el.row;
    cell.onclick = () => openPopup(el.sym);
    table.appendChild(cell);
  });
}

function openPopup(sym) {
  renderFacts(sym);
  popup.style.display = "flex"; // show modal
}

function renderFacts(sym) {
  const kid  = ELEMENTS_KID.find(e => e.sym === sym);
  const adult= ELEMENTS_ADULT.find(e => e.sym === sym);
  symbolEl.textContent = sym;

  if (mode === "kid") {
    nameEl.textContent = kid ? kid.name : adult?.name || sym;
    factEl.textContent = kid ? kid.fun  : "Fun fact coming soon!";
    kidBtn.classList.add("active");
    adultBtn.classList.remove("active");
  } else {
    nameEl.textContent = adult ? `${adult.name} (Atomic No. ${adult.num})` : kid?.name || sym;
    factEl.textContent = adult ? `Standard Atomic Weight: ${adult.mass}`    : "Data coming soon.";
    adultBtn.classList.add("active");
    kidBtn.classList.remove("active");
  }
}

function closePopup(){ popup.style.display="none"; }
function switchToKid(){ mode="kid";  if(symbolEl.textContent) renderFacts(symbolEl.textContent); }
function switchToAdult(){ mode="adult";if(symbolEl.textContent) renderFacts(symbolEl.textContent); }

/* ---------- init ----------------------------------------------------- */
window.addEventListener("DOMContentLoaded", ()=>{
  table    = document.getElementById("periodic-table");
  popup    = document.getElementById("info-popup");
  symbolEl = document.getElementById("element-name");
  nameEl   = document.getElementById("element-name"); // same id alias for clarity
  factEl   = document.getElementById("element-fact");
  kidBtn   = document.getElementById("kidMode");
  adultBtn = document.getElementById("adultMode");

  document.getElementById("close-popup").onclick = closePopup;
  kidBtn.onclick   = switchToKid;
  adultBtn.onclick = switchToAdult;
  document.getElementById("toggle-mode").onclick = ()=>{
    mode = (mode === "kid") ? "adult" : "kid";
    // update button text
    document.getElementById("toggle-mode").innerText = mode === "kid" ? "Switch to Adult Mode" : "Switch to Kid Mode";
  };

  buildGrid();
});
