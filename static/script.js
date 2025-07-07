/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Quick Reference & Atomic Specs
   -------------------------------------------------------------------- */

const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

const ELEMENTS_QUICK = [
  {sym:"H",  name:"Hydrogen",   row:1, col:1,  state:"gas",   ref:"I help rockets fly! 🚀"},
  {sym:"He", name:"Helium",     row:1, col:18, state:"gas",   ref:"I float balloons! 🎈"},
  {sym:"Li", name:"Lithium",    row:2, col:1,  state:"solid", ref:"I’m in your batteries! 🔋"},
  {sym:"Be", name:"Beryllium",  row:2, col:2,  state:"solid", ref:"I help build fast planes! ✈️"},
  {sym:"B",  name:"Boron",      row:2, col:13, state:"solid", ref:"I'm found in slime! 🧼"},
  {sym:"C",  name:"Carbon",     row:2, col:14, state:"solid", ref:"I'm in pencils and diamonds! ✏️💎"},
  {sym:"N",  name:"Nitrogen",   row:2, col:15, state:"gas",   ref:"I’m most of the air! 🌬️"},
  {sym:"O",  name:"Oxygen",     row:2, col:16, state:"gas",   ref:"You breathe me every day! ❤️"},
  {sym:"F",  name:"Fluorine",   row:2, col:17, state:"gas",   ref:"I protect your teeth! 😁"},
  {sym:"Ne", name:"Neon",       row:2, col:18, state:"gas",   ref:"I make lights glow! ✨"},
  // Add rest of 118 elements in this format
];

const ELEMENTS_SPECS = [
  {sym:"H",  name:"Hydrogen",   num:1,  mass:1.008,   row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",     num:2,  mass:4.0026,  row:1, col:18, state:"gas"},
  {sym:"Li", name:"Lithium",    num:3,  mass:6.94,    row:2, col:1,  state:"solid"},
  {sym:"Be", name:"Beryllium",  num:4,  mass:9.0122,  row:2, col:2,  state:"solid"},
  {sym:"B",  name:"Boron",      num:5,  mass:10.81,   row:2, col:13, state:"solid"},
  {sym:"C",  name:"Carbon",     num:6,  mass:12.011,  row:2, col:14, state:"solid"},
  {sym:"N",  name:"Nitrogen",   num:7,  mass:14.007,  row:2, col:15, state:"gas"},
  {sym:"O",  name:"Oxygen",     num:8,  mass:15.999,  row:2, col:16, state:"gas"},
  {sym:"F",  name:"Fluorine",   num:9,  mass:18.998,  row:2, col:17, state:"gas"},
  {sym:"Ne", name:"Neon",       num:10, mass:20.180,  row:2, col:18, state:"gas"},
  // Add rest of 118 elements in this format
];

let mode = "quick";
let table, popup, nameEl, factEl, symbolEl, quickBtn, specsBtn;

const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

function buildGrid() {
  table.innerHTML = "";
  ELEMENTS_SPECS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = "element";
    cell.textContent = el.sym;
    cell.style.background = colour(el.state);
    cell.style.gridColumnStart = el.col;
    cell.style.gridRowStart = el.row;
    cell.onclick = () => openPopup(el.sym);
    table.appendChild(cell);
  });
}

function openPopup(sym) {
  renderFacts(sym);
  popup.style.display = "flex";
}

function renderFacts(sym) {
  const quick = ELEMENTS_QUICK.find(e => e.sym === sym);
  const specs = ELEMENTS_SPECS.find(e => e.sym === sym);
  symbolEl.textContent = sym;

  if (mode === "quick") {
    nameEl.textContent = quick ? quick.name : specs?.name || sym;
    factEl.textContent = quick ? quick.ref  : "More fun facts soon!";
    quickBtn.classList.add("active");
    specsBtn.classList.remove("active");
  } else {
    nameEl.textContent = specs ? `${specs.name} (Atomic No. ${specs.num})` : quick?.name || sym;
    factEl.textContent = specs ? `Mass: ${specs.mass}` : "Data coming soon.";
    specsBtn.classList.add("active");
    quickBtn.classList.remove("active");
  }
}

function closePopup() { popup.style.display = "none"; }
function switchToQuick() { mode = "quick"; renderFacts(symbolEl.textContent); }
function switchToSpecs() { mode = "specs"; renderFacts(symbolEl.textContent); }

window.addEventListener("DOMContentLoaded", () => {
  table = document.getElementById("periodic-table");
  popup = document.getElementById("info-popup");
  symbolEl = document.getElementById("element-symbol");
  nameEl = document.getElementById("element-name");
  factEl = document.getElementById("element-fact");
  quickBtn = document.getElementById("quickBtn");
  specsBtn = document.getElementById("specsBtn");

  document.getElementById("close-popup").onclick = closePopup;
  quickBtn.onclick = switchToQuick;
  specsBtn.onclick = switchToSpecs;
  buildGrid();
});
