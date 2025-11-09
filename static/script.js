const SAMPLE_ELEMENTS = [
  { number: 1,  symbol: "H",  name: "Hydrogen",   category: "nonmetal",       xpos: 1,  ypos: 1, desc: "I help rockets fly! 🚀" },
  { number: 2,  symbol: "He", name: "Helium",     category: "noble gas",      xpos: 18, ypos: 1, desc: "I float balloons! 🎈" },
  { number: 13, symbol: "Al", name: "Aluminum",  category: "post-transition metal", xpos: 13, ypos: 3, desc: "Light metal for planes ✈️" }
];

function getElements() {
  const els = (typeof ELEMENTS !== "undefined" && Array.isArray(ELEMENTS) && ELEMENTS.length)
    ? ELEMENTS
    : SAMPLE_ELEMENTS.slice();
  return els;
}

function byId(id) { return document.getElementById(id); }
function colourKey(cat="") { return (cat || "").toLowerCase().replace(/\s+/g, "-"); }

function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart    = e.ypos;
  cell.dataset.cat = (e.category || "").toLowerCase();

  const num = (e.num != null ? e.num : e.number);
  const sym = (e.sym || e.symbol || "");
  const name = (e.name || "");

  cell.innerHTML = `
    <div class="num">${num ?? ""}</div>
    <div class="sym">${sym}</div>
    <div class="el-name">${name}</div>
  `;

  cell.title = `${num ?? ""} ${name} (${sym})`.trim();
  cell.setAttribute("aria-label", cell.title);

  if (typeof openPopup === "function") {
    cell.addEventListener("click", () => openPopup(e));
  }

  return cell;
}

function renderGrid() {
  const grid = byId("periodic-table") || byId("grid") || document.body;
  grid.classList.add("pt-grid");

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  const data = getElements();
  data.forEach(e => grid.appendChild(makeCell(e)));
}

// === START OF NEW CODE TO ADD ===

function openPopup(elementData) {
  const elementCard = byId("element-card");
  if (!elementCard) {
    console.error("Element card not found!");
    return;
  }

  // Remove the 'hidden' class to make the card visible
  elementCard.classList.remove("hidden");

  // Populate the card with the element's data
  byId("element-symbol").textContent = elementData.symbol;
  byId("element-name").textContent = elementData.name;
  byId("element-fact").textContent = elementData.desc || "No fact available.";
}

function closeCard() {
  const elementCard = byId("element-card");
  if (elementCard) {
    elementCard.classList.add("hidden"); // Add the 'hidden' class to hide the card
  }
}

// === END OF NEW CODE TO ADD ===

window.addEventListener("DOMContentLoaded", renderGrid);
