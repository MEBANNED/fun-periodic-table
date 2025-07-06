/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult facts chosen INSIDE popup
   -------------------------------------------------------------------- */

/* ---------- constants ------------------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- dataset: KID --------------------------------------------- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen", row:1, col:1,  state:"gas",   fun:"Rocket fuel helper! 🚀"},
  {sym:"He", name:"Helium",   row:1, col:18, state:"gas",   fun:"Makes balloons float! 🎈"},
  {sym:"Li", name:"Lithium",  row:2, col:1,  state:"solid", fun:"Found in batteries! 🔋"},
  {sym:"Be", name:"Beryllium",row:2, col:2,  state:"solid", fun:"Used in aerospace! 🛩️"},
  {sym:"B",  name:"Boron",    row:2, col:13, state:"solid", fun:"Used in slime kits! 🧪"},
  {sym:"C",  name:"Carbon",   row:2, col:14, state:"solid", fun:"The base of life! 🌱"},
  {sym:"N",  name:"Nitrogen", row:2, col:15, state:"gas",   fun:"Fills most of the air! 🌬️"},
  {sym:"O",  name:"Oxygen",   row:2, col:16, state:"gas",   fun:"You breathe me! ❤️"},
  {sym:"F",  name:"Fluorine", row:2, col:17, state:"gas",   fun:"Protects teeth! 😁"},
  {sym:"Ne", name:"Neon",     row:2, col:18, state:"gas",   fun:"Glows in signs! ✨"},
  // Add more as needed
];

/* ---------- dataset: ADULT ------------------------------------------- */
const ELEMENTS_ADULT = [
  {sym:"H",  name:"Hydrogen", num:1,  mass:1.008,   row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",   num:2,  mass:4.0026,  row:1, col:18, state:"gas"},
  {sym:"Li", name:"Lithium",  num:3,  mass:6.94,    row:2, col:1,  state:"solid"},
  {sym:"Be", name:"Beryllium",num:4,  mass:9.0122,  row:2, col:2,  state:"solid"},
  {sym:"B",  name:"Boron",    num:5,  mass:10.81,   row:2, col:13, state:"solid"},
  {sym:"C",  name:"Carbon",   num:6,  mass:12.011,  row:2, col:14, state:"solid"},
  {sym:"N",  name:"Nitrogen", num:7,  mass:14.007,  row:2, col:15, state:"gas"},
  {sym:"O",  name:"Oxygen",   num:8,  mass:15.999,  row:2, col:16, state:"gas"},
  {sym:"F",  name:"Fluorine", num:9,  mass:18.998,  row:2, col:17, state:"gas"},
  {sym:"Ne", name:"Neon",     num:10, mass:20.180,  row:2, col:18, state:"gas"},
  // Add more as needed
];

/* ---------- globals -------------------------------------------------- */
let mode = "kid";   // default view inside popup
let table, pop, kidBtn, adultBtn;

const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- build the grid ------------------------------------------ */
function renderTable() {
  table.innerHTML = "";
  const data = ELEMENTS_ADULT;
  data.forEach(el => {
    const card = document.createElement("div");
    card.className = "element";
    card.textContent = el.sym;
    card.style.background = colour(el.state);
    card.style.gridColumnStart = el.col;
    card.style.gridRowStart    = el.row;
    card.onclick = () => openPopup(el);
    table.appendChild(card);
  });
}

/* ---------- popup helpers ------------------------------------------- */
function renderFacts(el) {
  document.getElementById("symbol").innerText = el.sym;
  if (mode === "kid") {
    const kid = ELEMENTS_KID.find(e => e.sym === el.sym);
    document.getElementById("name").innerText    = kid?.name || el.name;
    document.getElementById("funfact").innerText = kid?.fun || "Fun fact coming soon!";
  } else {
    const ad  = ELEMENTS_ADULT.find(e => e.sym === el.sym);
    document.getElementById("name").innerText    = `${ad.name} (Atomic No. ${ad.num})`;
    document.getElementById("funfact").innerText = `Standard Atomic Weight: ${ad.mass}`;
  }
  kidBtn.classList.toggle("active",   mode === "kid");
  adultBtn.classList.toggle("active", mode === "adult");
}

function openPopup(el) {
  renderFacts(el);
  pop.classList.remove("hidden");

  kidBtn.onclick   = () => { mode = "kid";   renderFacts(el); };
  adultBtn.onclick = () => { mode = "adult"; renderFacts(el); };
}
function hidePopup() { pop.classList.add("hidden"); }

/* ---------- init on load -------------------------------------------- */
window.onload = () => {
  table    = document.getElementById("table");
  pop      = document.getElementById("popup");
  kidBtn   = document.getElementById("kidMode");
  adultBtn = document.getElementById("adultMode");

  document.getElementById("close").onclick = hidePopup;
  document.addEventListener("keydown", e => { if (e.key === "Escape") hidePopup(); });

  renderTable();
};
