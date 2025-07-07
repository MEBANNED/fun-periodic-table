/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Quick Reference & Atomic Specs
   (ID mismatch hot‑fix: quickRefBtn + symbol/text IDs corrected)
   -------------------------------------------------------------------- */

const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- Quick Reference (kid‑friendly) -------------------------- */
const ELEMENTS_QUICK = [
  {sym:"H",  name:"Hydrogen",   row:1,col:1,  state:"gas",   ref:"I help rockets fly! 🚀"},
  {sym:"He", name:"Helium",     row:1,col:18, state:"gas",   ref:"I float balloons! 🎈"},
  {sym:"Li", name:"Lithium",    row:2,col:1,  state:"solid", ref:"I'm in batteries! 🔋"},
  {sym:"Be", name:"Beryllium",  row:2,col:2,  state:"solid", ref:"I build fast planes! ✈️"},
  {sym:"B",  name:"Boron",      row:2,col:13, state:"solid", ref:"I'm inside slime! 🧼"},
  {sym:"C",  name:"Carbon",     row:2,col:14, state:"solid", ref:"Pencils & diamonds! ✏️💎"},
  {sym:"N",  name:"Nitrogen",   row:2,col:15, state:"gas",   ref:"Most of the air! 🌬️"},
  {sym:"O",  name:"Oxygen",     row:2,col:16, state:"gas",   ref:"You breathe me! ❤️"},
  {sym:"F",  name:"Fluorine",   row:2,col:17, state:"gas",   ref:"Protects teeth! 😁"},
  {sym:"Ne", name:"Neon",       row:2,col:18, state:"gas",   ref:"Glowy signs! ✨"}
  // ...add remaining elements here...
];

/* ---------- Atomic Specs (adult) ---------------------------------- */
const ELEMENTS_SPECS = [
  {sym:"H",  name:"Hydrogen",  num:1,  mass:1.008,  row:1,col:1,  state:"gas"},
  {sym:"He", name:"Helium",    num:2,  mass:4.0026, row:1,col:18, state:"gas"},
  {sym:"Li", name:"Lithium",   num:3,  mass:6.94,   row:2,col:1,  state:"solid"},
  {sym:"Be", name:"Beryllium", num:4,  mass:9.0122, row:2,col:2,  state:"solid"},
  {sym:"B",  name:"Boron",     num:5,  mass:10.81,  row:2,col:13, state:"solid"},
  {sym:"C",  name:"Carbon",    num:6,  mass:12.011, row:2,col:14, state:"solid"},
  {sym:"N",  name:"Nitrogen",  num:7,  mass:14.007, row:2,col:15, state:"gas"},
  {sym:"O",  name:"Oxygen",    num:8,  mass:15.999, row:2,col:16, state:"gas"},
  {sym:"F",  name:"Fluorine",  num:9,  mass:18.998, row:2,col:17, state:"gas"},
  {sym:"Ne", name:"Neon",      num:10, mass:20.180, row:2,col:18, state:"gas"}
  // ...add remaining elements here...
];

/* ---------- UI Globals -------------------------------------------- */
let mode = "quick";                 // "quick" | "specs"
let grid,popup,symbolBox,titleBox,bodyBox,quickBtn,specsBtn;
const colour = s=>STATE_COLOUR[s]||STATE_COLOUR.unknown;

/* ---------- Build Grid -------------------------------------------- */
function buildGrid(){
  grid.innerHTML="";
  ELEMENTS_SPECS.forEach(el=>{
    const cell=document.createElement("div");
    cell.className="element";
    cell.textContent=el.sym;
    cell.dataset.state=el.state;
    cell.style.gridColumnStart=el.col;
    cell.style.gridRowStart   =el.row;
    cell.onclick=()=>openPopup(el.sym);
    grid.appendChild(cell);
  });
}

/* ---------- Render Popup ------------------------------------------ */
function render(sym){
  const q=ELEMENTS_QUICK.find(e=>e.sym===sym);
  const s=ELEMENTS_SPECS.find(e=>e.sym===sym);
  symbolBox.textContent=sym;
  if(mode==="specs"){
    titleBox.textContent=`${s.name} (No. ${s.num})`;
    bodyBox.textContent =`Mass: ${s.mass}`;
    specsBtn.classList.add("active");quickBtn.classList.remove("active");
  }else{
    titleBox.textContent=q.name;
    bodyBox.textContent =q.ref;
    quickBtn.classList.add("active");specsBtn.classList.remove("active");
  }
}

function openPopup(sym){
  render(sym);
  popup.style.display="flex";
}
function closePopup(){popup.style.display="none";}
function toQuick(){ if(mode!=="quick"){mode="quick";render(symbolBox.textContent);} }
function toSpecs(){ if(mode!=="specs"){mode="specs";render(symbolBox.textContent);} }

/* ---------- DOM Ready --------------------------------------------- */
window.addEventListener("DOMContentLoaded",()=>{
  grid       =document.getElementById("periodic-table");
  popup      =document.getElementById("info-popup");
  symbolBox  =document.getElementById("element-name"); // use same element
  titleBox   =symbolBox;
  bodyBox    =document.getElementById("element-fact");
  quickBtn   =document.getElementById("quickRefBtn"); // <-- correct ID
  specsBtn   =document.getElementById("specsBtn");
  document.getElementById("close-popup").onclick=closePopup;
  quickBtn.onclick=toQuick;
  specsBtn.onclick=toSpecs;

  buildGrid();
});
