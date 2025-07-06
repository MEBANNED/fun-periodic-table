/* -----------------------------------------------------------------------
   Two in-popup views:
     ① Atomic Specs  (default) – atomic number + standard mass
     ② Quick Reference          – short description
   -------------------------------------------------------------------- */

/* colour by state */
const STATE_COLOUR = { solid:"#90be6d", liquid:"#8ecae6", gas:"#ffd93b", unknown:"#adb5bd" };

/* ---- data (first 20 shown; extend to Og) ---- */
const ELEMENTS = [
  {sym:"H",  name:"Hydrogen",  num:1,  mass:1.008,   state:"gas",   row:1, col:1,  ref:"Lightest element; fuels stars."},
  {sym:"He", name:"Helium",    num:2,  mass:4.0026,  state:"gas",   row:1, col:18, ref:"Inert gas for cryogenics & balloons."},
  {sym:"Li", name:"Lithium",   num:3,  mass:6.94,    state:"solid", row:2, col:1,  ref:"Soft metal in rechargeable batteries."},
  {sym:"Be", name:"Beryllium", num:4,  mass:9.0122,  state:"solid", row:2, col:2,  ref:"Light metal for aerospace parts."},
  {sym:"B",  name:"Boron",     num:5,  mass:10.81,   state:"solid", row:2, col:13, ref:"Used in glass and borax detergents."},
  {sym:"C",  name:"Carbon",    num:6,  mass:12.011,  state:"solid", row:2, col:14, ref:"Basis of organic life; diamond/graphite."},
  {sym:"N",  name:"Nitrogen",  num:7,  mass:14.007,  state:"gas",   row:2, col:15, ref:"78 % of Earth’s atmosphere."},
  {sym:"O",  name:"Oxygen",    num:8,  mass:15.999,  state:"gas",   row:2, col:16, ref:"Essential for respiration & combustion."},
  {sym:"F",  name:"Fluorine",  num:9,  mass:18.998,  state:"gas",   row:2, col:17, ref:"Highly reactive; in Teflon & toothpaste."},
  {sym:"Ne", name:"Neon",      num:10, mass:20.180,  state:"gas",   row:2, col:18, ref:"Bright orange-red in neon lights."},
  {sym:"Na", name:"Sodium",    num:11, mass:22.990,  state:"solid", row:3, col:1,  ref:"Forms common salt with chlorine."},
  {sym:"Mg", name:"Magnesium", num:12, mass:24.305,  state:"solid", row:3, col:2,  ref:"Burns bright white; light alloys."},
  {sym:"Al", name:"Aluminium", num:13, mass:26.982,  state:"solid", row:3, col:13, ref:"Light metal for cans and aircraft."},
  {sym:"Si", name:"Silicon",   num:14, mass:28.085,  state:"solid", row:3, col:14, ref:"Semiconductor in all computer chips."},
  {sym:"P",  name:"Phosphorus",num:15, mass:30.974,  state:"solid", row:3, col:15, ref:"Vital for DNA & fertilizers."},
  {sym:"S",  name:"Sulfur",    num:16, mass:32.06,   state:"solid", row:3, col:16, ref:"Yellow mineral; smells like rotten eggs."},
  {sym:"Cl", name:"Chlorine",  num:17, mass:35.45,   state:"gas",   row:3, col:17, ref:"Disinfects water; part of table salt."},
  {sym:"Ar", name:"Argon",     num:18, mass:39.948,  state:"gas",   row:3, col:18, ref:"Inert gas used in welding & bulbs."},
  {sym:"K",  name:"Potassium", num:19, mass:39.098,  state:"solid", row:4, col:1,  ref:"Essential nutrient; bursts in water."},
  {sym:"Ca", name:"Calcium",   num:20, mass:40.078,  state:"solid", row:4, col:2,  ref:"Builds bones and teeth."}
  /* ➜ continue rows 5-7 & lan/act to Og (118) */
];

/* ---------- globals & helpers ---------------------------------------- */
let currentView = "specs";  // "specs" or "reference"
const colour = s => STATE_COLOUR[s]||STATE_COLOUR.unknown;

let grid, popup, symbolBox, nameBox, factBox, specsBtn, refBtn;

/* ---------- grid & popup -------------------------------------------- */
function buildGrid(){
  grid.innerHTML = "";
  ELEMENTS.forEach(el=>{
    const cell = document.createElement("div");
    cell.className = "element";
    cell.textContent = el.sym;
    cell.style.background = colour(el.state);
    cell.style.gridColumnStart = el.col;
    cell.style.gridRowStart = el.row;
    cell.onclick = () => openPopup(el.sym);
    grid.appendChild(cell);
  });
}

function openPopup(sym){
  render(sym);
  popup.style.display = "flex";
  specsBtn.onclick = () => {currentView="specs";      render(sym);};
  refBtn.onclick   = () => {currentView="reference";  render(sym);};
}
function closePopup(){ popup.style.display = "none"; }

function render(sym){
  const el = ELEMENTS.find(e=>e.sym===sym);
  if(!el) return;
  symbolBox.textContent = el.sym;
  if(currentView==="specs"){
    nameBox.textContent = `${el.name} (Atomic No. ${el.num})`;
    factBox.textContent = `Standard Atomic Mass: ${el.mass}`;
    specsBtn.classList.add("active");  refBtn.classList.remove("active");
  }else{
    nameBox.textContent = el.name;
    factBox.textContent = el.ref;
    refBtn.classList.add("active");    specsBtn.classList.remove("active");
  }
}

/* ---------- init ----------------------------------------------------- */
window.addEventListener("DOMContentLoaded",()=>{
  grid       = document.getElementById("periodic-table");
  popup      = document.getElementById("info-popup");
  symbolBox  = document.getElementById("element-name");  // heading
  nameBox    = document.getElementById("element-name");  // same element
  factBox    = document.getElementById("element-fact");
  specsBtn   = document.getElementById("specsBtn");
  refBtn     = document.getElementById("refBtn");
  document.getElementById("close-popup").onclick = closePopup;
  buildGrid();
});
