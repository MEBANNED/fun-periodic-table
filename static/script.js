/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult facts chosen INSIDE popup
   (Null‑safe, so buttons work even for elements missing in one list)
   -------------------------------------------------------------------- */

/* ---------- constants ------------------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- dataset: KID (trimmed for demo) -------------------------- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen", row:1, col:1,  state:"gas",   fun:"Rocket fuel helper! 🚀"},
  {sym:"He", name:"Helium",   row:1, col:18, state:"gas",   fun:"Makes balloons float! 🎈"},
  // … add all remaining kid entries here …
];

/* ---------- dataset: ADULT ------------------------------------------- */
const ELEMENTS_ADULT = [
  {sym:"H",  name:"Hydrogen", num:1,  mass:1.008,   row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",   num:2,  mass:4.0026,  row:1, col:18, state:"gas"},
  // … add all remaining adult entries here …
];

/* ---------- globals -------------------------------------------------- */
let mode = "kid";   // default popup mode
let table, pop, kidBtn, adultBtn;

const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- build grid ---------------------------------------------- */
function renderTable() {
  table.innerHTML = "";
  ELEMENTS_ADULT.forEach(el => {
    const card = document.createElement("div");
    card.className = "element";
    card.textContent = el.sym;
    card.style.background      = colour(el.state);
    card.style.gridColumnStart = el.col;
    card.style.gridRowStart    = el.row;
    card.onclick = () => openPopup(el.sym);
    table.appendChild(card);
  });
}

/* ---------- popup helpers ------------------------------------------- */
function renderFacts(symbol) {
  const kid = ELEMENTS_KID.find(e => e.sym === symbol);
  const ad  = ELEMENTS_ADULT.find(e => e.sym === symbol);

  document.getElementById("symbol").innerText = symbol;

  if (mode === "kid" && kid) {
    document.getElementById("name").innerText    = kid.name;
    document.getElementById("funfact").innerText = kid.fun;
  } else if (mode === "adult" && ad) {
    document.getElementById("name").innerText    = `${ad.name} (Atomic No. ${ad.num})`;
    document.getElementById("funfact").innerText = `Standard Atomic Weight: ${ad.mass}`;
  } else {
    // Fallback if entry missing
    document.getElementById("name").innerText    = "(data coming soon)";
    document.getElementById("funfact").innerText = "";
  }

  kidBtn.classList.toggle("active",   mode === "kid");
  adultBtn.classList.toggle("active", mode === "adult");
}

function openPopup(symbol) {
  renderFacts(symbol);
  pop.classList.remove("hidden");

  kidBtn.onclick   = () => { mode = "kid";   renderFacts(symbol); };
  adultBtn.onclick = () => { mode = "adult"; renderFacts(symbol); };
}
function hidePopup() { pop.classList.add("hidden"); }

/* ---------- init ----------------------------------------------------- */
window.onload = () => {
  table    = document.getElementById("table");
  pop      = document.getElementById("popup");
  kidBtn   = document.getElementById("kidMode");
  adultBtn = document.getElementById("adultMode");

  document.getElementById("close").onclick = hidePopup;
  document.addEventListener("keydown", e => { if (e.key === "Escape") hidePopup(); });

  renderTable();
};
