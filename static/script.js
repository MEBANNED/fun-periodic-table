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

/* ---------- dataset: KID (118 entries – trimmed here for brevity) ---- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen", row:1, col:1,  state:"gas",   fun:"Rocket fuel helper! 🚀"},
  {sym:"He", name:"Helium",   row:1, col:18, state:"gas",   fun:"Makes balloons float! 🎈"},
  // … (rest of 118 kid entries)
];

/* ---------- dataset: ADULT ------------------------------------------- */
const ELEMENTS_ADULT = [
  {sym:"H",  name:"Hydrogen", num:1,  mass:1.008,   row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",   num:2,  mass:4.0026,  row:1, col:18, state:"gas"},
  // … (rest of 118 adult entries)
];

/* ---------- globals -------------------------------------------------- */
let mode = "kid";   // default view inside popup
let table, pop, kidBtn, adultBtn;

const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- build the grid ------------------------------------------ */
function renderTable() {
  table.innerHTML = "";
  // grid always renders – facts chosen later
  const data = ELEMENTS_ADULT; // positions identical, so use one list for grid
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
    document.getElementById("name").innerText    = kid.name;
    document.getElementById("funfact").innerText = kid.fun;
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

  // hook buttons every time (safe)
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
