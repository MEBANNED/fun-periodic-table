const STATE_COLOUR = {
  solid: "#90be6d",
  liquid: "#8ecae6",
  gas: "#ffd93b",
  unknown: "#adb5bd"
};

const ELEMENTS_QUICK = [
  {sym:"H", name:"Hydrogen", row:1, col:1, state:"gas", ref:"I help rockets fly! 🚀"},
  {sym:"He", name:"Helium", row:1, col:18, state:"gas", ref:"I float balloons! 🎈"},
  // Add more kid-friendly facts here...
];

const ELEMENTS_SPECS = [
  {sym:"H", name:"Hydrogen", num:1, mass:1.008, row:1, col:1, state:"gas"},
  {sym:"He", name:"Helium", num:2, mass:4.0026, row:1, col:18, state:"gas"},
  // Add more atomic specs here...
];

let mode = "quick"; // always starts in Quick Reference mode
let grid, popup, symbolBox, titleBox, bodyBox, quickBtn, specsBtn;

function buildGrid() {
  grid.innerHTML = "";
  ELEMENTS_SPECS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = "element";
    cell.textContent = el.sym;
    cell.dataset.state = el.state;
    cell.style.gridColumnStart = el.col;
    cell.style.gridRowStart = el.row;
    cell.onclick = () => openPopup(el.sym);
    grid.appendChild(cell);
  });
}

function render(sym) {
  const q = ELEMENTS_QUICK.find(e => e.sym === sym);
  const s = ELEMENTS_SPECS.find(e => e.sym === sym);
  symbolBox.textContent = s.sym;
  if (mode === "specs") {
    titleBox.textContent = `${s.name} (No. ${s.num})`;
    bodyBox.textContent = `Mass: ${s.mass}`;
    specsBtn.classList.add("active");
    quickBtn.classList.remove("active");
  } else {
    titleBox.textContent = q.name;
    bodyBox.textContent = q.ref;
    quickBtn.classList.add("active");
    specsBtn.classList.remove("active");
  }
}

function openPopup(sym) {
  render(sym);
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

function toQuick() {
  if (mode !== "quick") {
    mode = "quick";
    render(symbolBox.textContent);
  }
}

function toSpecs() {
  if (mode !== "specs") {
    mode = "specs";
    render(symbolBox.textContent);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  grid = document.getElementById("periodic-table");
  popup = document.getElementById("info-popup");
  symbolBox = document.getElementById("element-name");
  titleBox = document.getElementById("element-title");
  bodyBox = document.getElementById("element-fact");
  quickBtn = document.getElementById("quickRefBtn");
  specsBtn = document.getElementById("specsBtn");

  document.getElementById("close-popup").onclick = closePopup;
  quickBtn.onclick = toQuick;
  specsBtn.onclick = toSpecs;

  buildGrid();
});
