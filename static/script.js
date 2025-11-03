
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

  // keep your existing grid placement
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart    = e.ypos;

  // keep your existing category data
  cell.dataset.cat = (e.category || "").toLowerCase();

  // tolerate either {num|number}, {sym|symbol}, {name}
  const num = (e.num != null ? e.num : e.number);
  const sym = (e.sym || e.symbol || "");
  const nameRaw = (e.name || "");
  const name = nameRaw.trim().toLowerCase() === "aluminium" ? "Aluminum" : nameRaw;

  // ✨ stack = number (top), symbol (middle), name (bottom)
  cell.innerHTML = `
    <div class="num">${num ?? ""}</div>
    <div class="sym">${sym}</div>
    <div class="el-name">${name}</div>
  `;

  // optional: tooltip + a11y label (harmless if you already have others)
  cell.title = `${num ?? ""} ${name} (${sym})`.trim();
  cell.setAttribute("aria-label", cell.title);

  // if you already attach clicks elsewhere, this won’t interfere.
  if (typeof openPopup === "function") {
    cell.addEventListener("click", () => openPopup(e));
  }

  return cell;
}
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
