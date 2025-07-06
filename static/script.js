/**
 * Interactive Periodic Table
 *  ─ Heading shows immediately
 *  ─ Grid buttons populate from ELEMENTS[]
 *  ─ Clicking a cell opens a popup
 *  ─ Default view: Atomic Specs (number & mass)
 *  ─ Secondary view: Quick Reference (one‑line description)
 *
 *  Note: For brevity only H‑Kr (1‑36) included below; add 37‑118 under the
 *  //‑‑ ADD MORE ‑‑// comment to complete the dataset.
 */

/* ---------- colour palette by physical state ------------------------ */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- element dataset (H → Kr) -------------------------------- */
const ELEMENTS = [
  { sym:"H",  name:"Hydrogen",  num:1,  mass:1.008,   row:1,col:1,  state:"gas",    ref:"Lightest element; fuels stars." },
  { sym:"He", name:"Helium",    num:2,  mass:4.0026, row:1,col:18, state:"gas",    ref:"Inert gas for balloons & MRI cryogenics." },

  { sym:"Li", name:"Lithium",   num:3,  mass:6.94,    row:2,col:1,  state:"solid",  ref:"Rechargeable batteries." },
  { sym:"Be", name:"Beryllium", num:4,  mass:9.0122,  row:2,col:2,  state:"solid",  ref:"Aerospace structures." },
  { sym:"B",  name:"Boron",     num:5,  mass:10.81,   row:2,col:13, state:"solid",  ref:"Borosilicate glass, detergents." },
  { sym:"C",  name:"Carbon",    num:6,  mass:12.011,  row:2,col:14, state:"solid",  ref:"Basis of organic life." },
  { sym:"N",  name:"Nitrogen",  num:7,  mass:14.007,  row:2,col:15, state:"gas",    ref:"78 % of Earth’s atmosphere." },
  { sym:"O",  name:"Oxygen",    num:8,  mass:15.999,  row:2,col:16, state:"gas",    ref:"Essential for respiration." },
  { sym:"F",  name:"Fluorine",  num:9,  mass:18.998,  row:2,col:17, state:"gas",    ref:"Most reactive element; Teflon." },
  { sym:"Ne", name:"Neon",      num:10, mass:20.180,  row:2,col:18, state:"gas",    ref:"Neon signage lighting." },

  { sym:"Na", name:"Sodium",    num:11, mass:22.990,  row:3,col:1,  state:"solid",  ref:"Table salt with chlorine." },
  { sym:"Mg", name:"Magnesium", num:12, mass:24.305,  row:3,col:2,  state:"solid",  ref:"Light alloys; bright flares." },
  { sym:"Al", name:"Aluminium", num:13, mass:26.982,  row:3,col:13, state:"solid",  ref:"Cans, foil, aircraft." },
  { sym:"Si", name:"Silicon",   num:14, mass:28.085,  row:3,col:14, state:"solid",  ref:"Core semiconductor." },
  { sym:"P",  name:"Phosphorus",num:15, mass:30.974,  row:3,col:15, state:"solid",  ref:"DNA & fertilizers." },
  { sym:"S",  name:"Sulfur",    num:16, mass:32.06,   row:3,col:16, state:"solid",  ref:"Matches, vulcanized rubber." },
  { sym:"Cl", name:"Chlorine",  num:17, mass:35.45,   row:3,col:17, state:"gas",    ref:"Water disinfectant; PVC." },
  { sym:"Ar", name:"Argon",     num:18, mass:39.948,  row:3,col:18, state:"gas",    ref:"Inert shielding gas." },

  { sym:"K",  name:"Potassium", num:19, mass:39.098,  row:4,col:1,  state:"solid",  ref:"Essential nutrient." },
  { sym:"Ca", name:"Calcium",   num:20, mass:40.078,  row:4,col:2,  state:"solid",  ref:"Bones & shells." },
  { sym:"Sc", name:"Scandium",  num:21, mass:44.956,  row:4,col:3,  state:"solid",  ref:"Strengthens Al alloys." },
  { sym:"Ti", name:"Titanium",  num:22, mass:47.867,  row:4,col:4,  state:"solid",  ref:"Strong, light metal." },
  { sym:"V",  name:"Vanadium",  num:23, mass:50.942,  row:4,col:5,  state:"solid",  ref:"High‑strength steels." },
  { sym:"Cr", name:"Chromium",  num:24, mass:51.996,  row:4,col:6,  state:"solid",  ref:"Stainless steel." },
  { sym:"Mn", name:"Manganese", num:25, mass:54.938,  row:4,col:7,  state:"solid",  ref:"Steel additive; batteries." },
  { sym:"Fe", name:"Iron",      num:26, mass:55.845,  row:4,col:8,  state:"solid",  ref:"Most‑used metal." },
  { sym:"Co", name:"Cobalt",    num:27, mass:58.933,  row:4,col:9,  state:"solid",  ref:"Rechargeable batteries." },
  { sym:"Ni", name:"Nickel",    num:28, mass:58.693,  row:4,col:10, state:"solid",  ref:"Coins, stainless steel." },
  { sym:"Cu", name:"Copper",    num:29, mass:63.546,  row:4,col:11, state:"solid",  ref:"Excellent conductor." },
  { sym:"Zn", name:"Zinc",      num:30, mass:65.38,   row:4,col:12, state:"solid",  ref:"Galvanizes steel." },
  { sym:"Ga", name:"Gallium",   num:31, mass:69.723,  row:4,col:13, state:"solid",  ref:"Melts in hand; LEDs." },
  { sym:"Ge", name:"Germanium", num:32, mass:72.630,  row:4,col:14, state:"solid",  ref:"Fiber optics." },
  { sym:"As", name:"Arsenic",   num:33, mass:74.922,  row:4,col:15, state:"solid",  ref:"Poison, semiconductors." },
  { sym:"Se", name:"Selenium",  num:34, mass:78.971,  row:4,col:16, state:"solid",  ref:"Photocells." },
  { sym:"Br", name:"Bromine",   num:35, mass:79.904,  row:4,col:17, state:"liquid", ref:"Flame retardants." },
  { sym:"Kr", name:"Krypton",   num:36, mass:83.798,  row:4,col:18, state:"gas",    ref:"High‑end lighting." }

  // –– ADD MORE ELEMENTS HERE (37 → 118) ––
];

/* ---------- UI logic ------------------------------------------------ */
let currentView="specs";
const colour = s=>STATE_COLOUR[s]||STATE_COLOUR.unknown;

let grid,popup,symBox,nameBox,factBox,specBtn,refBtn;

function buildGrid(){
  grid.innerHTML="";
  ELEMENTS.forEach(el=>{
    const cell=document.createElement("div");
    cell.className="element";
    cell.textContent=el.sym;
    cell.style.background=colour(el.state);
    cell.style.gridColumnStart=el.col;
    cell.style.gridRowStart=el.row;
    cell.onclick=()=>openPopup(el.sym);
    grid.appendChild(cell);
  });
}

function render(sym){
  const el=ELEMENTS.find(e=>e.sym===sym);
  if(!el)return;
  symBox.textContent=el.sym;
  if(currentView==="specs"){
    nameBox.textContent=`${el.name} (No. ${el.num})`;
    factBox.textContent=`Atomic Mass: ${el.mass}`;
    specBtn.classList.add("active"); refBtn.classList.remove("active");
  }else{
    nameBox.textContent=el.name;
    factBox.textContent=el.ref;
    refBtn.classList.add("active"); specBtn.classList.remove("active");
  }
}

function openPopup(sym){
  render(sym);
  popup.style.display="flex";
  specBtn.onclick=()=>{currentView="specs";render(sym);};
  refBtn.onclick =()=>{currentView="reference";render(sym);};
}
function closePopup(){popup.style.display="none";}

window.addEventListener("DOMContentLoaded",()=>{
  grid    =document.getElementById("periodic-table");
  popup   =document.getElementById("info-popup");
  symBox  =document.getElementById("element-name");
  nameBox =document.getElementById("element-name");
  factBox =document.getElementById("element-fact");
  specBtn =document.getElementById("specsBtn");
  refBtn  =document.getElementById("refBtn");
  document.getElementById("close-popup").onclick=closePopup;
  build
