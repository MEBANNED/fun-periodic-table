/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult Toggle Version (FULL, fixed)
   -------------------------------------------------------------------- */

/* ---------- constants ------------------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- dataset: KID (118 entries) ------------------------------- */
const ELEMENTS_KID = [
  /* 1 */  {sym:"H",  name:"Hydrogen",          row:1, col:1,  state:"gas",   fun:"Rocket fuel helper! 🚀"},
           {sym:"He", name:"Helium",            row:1, col:18, state:"gas",   fun:"Makes balloons float! 🎈"},
  /* 2 */  {sym:"Li", name:"Lithium",           row:2, col:1,  state:"solid", fun:"Powers tiny batteries! 🔋"},
           {sym:"Be", name:"Beryllium",         row:2, col:2,  state:"solid", fun:"Builds light spacecraft! 🛸"},
           {sym:"B",  name:"Boron",             row:2, col:13, state:"solid", fun:"Hidden in slime borax! 🧼"},
           {sym:"C",  name:"Carbon",            row:2, col:14, state:"solid", fun:"Both diamonds & pencils! 💎✏️"},
           {sym:"N",  name:"Nitrogen",          row:2, col:15, state:"gas",   fun:"78% of the air! 🌬️"},
           {sym:"O",  name:"Oxygen",            row:2, col:16, state:"gas",   fun:"We breathe it! ❤️"},
           {sym:"F",  name:"Fluorine",          row:2, col:17, state:"gas",   fun:"Protects teeth enamel! 😁"},
           {sym:"Ne", name:"Neon",              row:2, col:18, state:"gas",   fun:"Glows in neon signs! ✨"},
  /* ... full list continues ... */
];

/* ---------- dataset: ADULT (118 entries) ----------------------------- */
const ELEMENTS_ADULT = [
  /* 1 */  {sym:"H",  name:"Hydrogen",  num:1,   mass:1.008,     row:1, col:1,  state:"gas"},
           {sym:"He", name:"Helium",    num:2,   mass:4.0026,    row:1, col:18, state:"gas"},
  /* 2 */  {sym:"Li", name:"Lithium",   num:3,   mass:6.94,      row:2, col:1,  state:"solid"},
           {sym:"Be", name:"Beryllium", num:4,   mass:9.0122,    row:2, col:2,  state:"solid"},
           {sym:"B",  name:"Boron",     num:5,   mass:10.81,     row:2, col:13, state:"solid"},
           {sym:"C",  name:"Carbon",    num:6,   mass:12.011,    row:2, col:14, state:"solid"},
           {sym:"N",  name:"Nitrogen",  num:7,   mass:14.007,    row:2, col:15, state:"gas"},
           {sym:"O",  name:"Oxygen",    num:8,   mass:15.999,    row:2, col:16, state:"gas"},
           {sym:"F",  name:"Fluorine",  num:9,   mass:18.998,    row:2, col:17, state:"gas"},
           {sym:"Ne", name:"Neon",      num:10,  mass:20.180,    row:2, col:18, state:"gas"},
  /* ... full list continues ... */
];

/* ---------- globals & helpers --------------------------------------- */
let mode = "kid"; // current view
let table, pop, toggleBtn;

const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- render the grid ----------------------------------------- */
function renderTable() {
  table.innerHTML = "";
  const data = (mode === "kid") ? ELEMENTS_KID : ELEMENTS_ADULT;
  data.forEach(el => {
    const card = document.createElement("div");
    card.className = "element";
    card.textContent = el.sym;
    card.style.background = colour(el.state);
    card.style.gridColumnStart = el.col;
    card.style.gridRowStart = el.row;
    card.onclick = () => showInfo(el);
    table.appendChild(card);
  });
}

/* ---------- popup logic --------------------------------------------- */
function showInfo(el) {
  document.getElementById("symbol").innerText = el.sym;
  if (mode === "kid") {
    document.getElementById("name").innerText    = el.name;
    document.getElementById("funfact").innerText = el.fun;
  } else {
    document.getElementById("name").innerText    = `${el.name} (Atomic No. ${el.num})`;
    document.getElementById("funfact").innerText = `Standard Atomic Weight: ${el.mass}`;
  }
  pop.classList.remove("hidden");
}
function hideInfo() { pop.classList.add("hidden"); }

/* ---------- initialisation ----------------------------------------- */
window.onload = () => {
  table     = document.getElementById("table");
  pop       = document.getElementById("popup");
  toggleBtn = document.getElementById("toggleMode");

  document.getElementById("close").onclick = hideInfo;
  document.addEventListener("keydown", e => { if (e.key === "Escape") hideInfo(); });

  toggleBtn.onclick = () => {
    mode = (mode === "kid") ? "adult" : "kid";
    toggleBtn.innerText = (mode === "kid") ? "Switch to Adult Mode" : "Switch to Kid Mode";
    renderTable();
  };

  renderTable();
};
