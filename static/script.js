
// If your project already defines ELEMENTS, we reuse it.
// Otherwise, we fall back to a tiny sample so the page won't break locally.
const SAMPLE_ELEMENTS = [
  { number: 1,  symbol: "H",  name: "Hydrogen",   category: "nonmetal",       xpos: 1,  ypos: 1, desc: "I help rockets fly! 🚀" },
  { number: 2,  symbol: "He", name: "Helium",     category: "noble gas",      xpos: 18, ypos: 1, desc: "I float balloons! 🎈" },
  { number: 13, symbol: "Al", name: "Aluminium",  category: "post-transition metal", xpos: 13, ypos: 3, desc: "Light metal for planes ✈️" }
];

function getElements() {
  const els = (typeof ELEMENTS !== "undefined" && Array.isArray(ELEMENTS) && ELEMENTS.length)
    ? ELEMENTS
    : SAMPLE_ELEMENTS.slice();

  // Enforce US spelling
  els.forEach(e => {
    if (e && typeof e.name === "string" && e.name.trim().toLowerCase() === "aluminium") {
      e.name = "Aluminum";
    }
  });
  return els;
}

function byId(id) { return document.getElementById(id); }
function colourKey(cat="") { return (cat || "").toLowerCase().replace(/\s+/g, "-"); }

/* === Cell builder ===================================================== */

function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart = e.ypos;
  cell.dataset.cat = (e.category || "").toLowerCase();

  // --- top atomic number ---
  const num = document.createElement("div");
  num.className = "num";
  num.textContent = e.number;
  cell.appendChild(num);

  // --- middle symbol ---
  const sym = document.createElement("div");
  sym.className = "sym";
  sym.textContent = e.symbol;
  cell.appendChild(sym);

  // --- bottom name ---
  const name = document.createElement("div");
  name.className = "el-name";
  name.textContent = (e.name && e.name.trim().toLowerCase() === "aluminium") 
    ? "Aluminum" : e.name;
  cell.appendChild(name);

  cell.addEventListener("click", () => openPopup(e));
  return cell;
}

/* === Grid render ====================================================== */

function renderGrid() {
  const grid = byId("periodic-table") || byId("grid") || document.body;
  grid.classList.add("pt-grid");

  // Clear old nodes
  while (grid.firstChild) grid.removeChild(grid.firstChild);

  const data = getElements();
  data.forEach(e => grid.appendChild(makeCell(e)));
}

/* === Startup ========================================================== */

window.addEventListener("DOMContentLoaded", renderGrid);
