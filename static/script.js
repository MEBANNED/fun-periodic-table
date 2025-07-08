const elements = [
  { sym: "H",  name: "Hydrogen",   row: 1, col: 1,  state: "gas",   ref: "I help rockets fly! 🚀", num: 1,  mass: 1.008 },
  { sym: "He", name: "Helium",     row: 1, col: 18, state: "gas",   ref: "I float balloons! 🎈",  num: 2,  mass: 4.0026 },
  { sym: "Li", name: "Lithium",    row: 2, col: 1,  state: "solid", ref: "I'm in batteries! 🔋",  num: 3,  mass: 6.94 },
  { sym: "Be", name: "Beryllium",  row: 2, col: 2,  state: "solid", ref: "I build fast planes! ✈️", num: 4, mass: 9.0122 },
  // Add more elements here...
];

let currentMode = "quick"; // default for popup
let currentElement = null;

function buildTable() {
  const grid = document.getElementById("periodic-table");
  elements.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.textContent = el.sym;
    div.style.gridColumnStart = el.col;
    div.style.gridRowStart = el.row;
    div.onclick = () => openPopup(el);
    grid.appendChild(div);
  });
}

function openPopup(el) {
  currentElement = el;
  currentMode = "quick";
  updatePopup();
  document.getElementById("info-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("info-popup").style.display = "none";
}

function toggleMode() {
  currentMode = currentMode === "quick" ? "spec" : "quick";
  updatePopup();
}

function updatePopup() {
  const el = currentElement;
  document.getElementById("element-symbol").innerText = el.sym;
  document.getElementById("element-name").innerText = el.name;

  if (currentMode === "quick") {
    document.getElementById("element-fact").innerText = el.ref;
    document.getElementById("toggle-mode").innerText = "Switch to Atomic Specs";
  } else {
    document.getElementById("element-fact").innerText = `Atomic Number: ${el.num}, Mass: ${el.mass}`;
    document.getElementById("toggle-mode").innerText = "Switch to Quick Reference";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildTable();
  document.getElementById("close-popup").onclick = closePopup;
  document.getElementById("toggle-mode").onclick = toggleMode;
});
