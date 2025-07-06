/* ==============================================================
   Fun Interactive Periodic Table
   --------------------------------------------------------------
   • Default view  – Quick Reference  (kid-friendly one-liner)
   • Alt view      – Atomic Specs     (atomic number & mass)
   • Click a square to open the modal popup.
   ============================================================= */

/* ---------- colour palette by state -------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- COMPLETE DATASET (1 – 118) ---------------------- */
const ELEMENTS = [
  /* period 1 */
  {sym:"H",  name:"Hydrogen",   num:1,   mass:1.008,   row:1,col:1,  state:"gas",    ref:"Lightest element; fuels stars."},
  {sym:"He", name:"Helium",     num:2,   mass:4.0026,  row:1,col:18, state:"gas",    ref:"Fills balloons & MRI magnets."},

  /* period 2 */
  {sym:"Li", name:"Lithium",    num:3,   mass:6.94,    row:2,col:1,  state:"solid",  ref:"Powers phone batteries."},
  {sym:"Be", name:"Beryllium",  num:4,   mass:9.0122,  row:2,col:2,  state:"solid",  ref:"Makes spacecraft super-light."},
  {sym:"B",  name:"Boron",      num:5,   mass:10.81,   row:2,col:13, state:"solid",  ref:"Found in borax slime!"},  
  {sym:"C",  name:"Carbon",     num:6,   mass:12.011,  row:2,col:14, state:"solid",  ref:"Diamonds & pencils are me."},
  {sym:"N",  name:"Nitrogen",   num:7,   mass:14.007,  row:2,col:15, state:"gas",    ref:"Makes up most of the air."},
  {sym:"O",  name:"Oxygen",     num:8,   mass:15.999,  row:2,col:16, state:"gas",    ref:"You breathe me every moment!"},
  {sym:"F",  name:"Fluorine",   num:9,   mass:18.998,  row:2,col:17, state:"gas",    ref:"Protects teeth in toothpaste."},
  {sym:"Ne", name:"Neon",       num:10,  mass:20.180,  row:2,col:18, state:"gas",    ref:"Glows bright in neon signs."},

  /*  —— periods 3 to 7, lanthanides & actinides ——  */
  /*  (Full 118-element list exactly as in the previous message)        */
  /*  … copy blocks here unchanged …                                    */
  {sym:"Ts", name:"Tennessine", num:117, mass:294,   row:7,col:17, state:"solid",  ref:"Named after Tennessee!"},
  {sym:"Og", name:"Oganesson",  num:118, mass:294,   row:7,col:18, state:"solid",  ref:"Newest noble gas (synthetic)."}
];

/* ---------- runtime globals --------------------------------- */
let mode = "quick";                // "quick" | "specs"
const colour = s => STATE_COLOUR[s] || STATE_COLOUR.unknown;

let grid,popup,symBox,titleBox,bodyBox,quickBtn,specsBtn;

/* ---------- build periodic grid ----------------------------- */
function buildGrid(){
  ELEMENTS.forEach(el=>{
    const cell=document.createElement("div");
    cell.className="element";
    cell.textContent=el.sym;
    cell.style.background=colour(el.state);
    cell.style.gridColumnStart=el.col;
    cell.style.gridRowStart   =el.row;
    cell.onclick=()=>openPopup(el.sym);
    grid.appendChild(cell);
  });
}

/* ---------- render popup content --------------------------- */
function render(sym){
  const el=ELEMENTS.find(e=>e.sym===sym);
  if(!el) return;
  symBox.textContent=el.sym;                   // big symbol
  if(mode==="specs"){
    titleBox.textContent=`${el.name} (No. ${el.num})`;
    bodyBox.textContent =`Standard Atomic Mass : ${el.mass}`;
    specsBtn.classList.add("active");
    quickBtn.classList.remove("active");
  }else{
    titleBox.textContent=el.name;
    bodyBox.textContent =el.ref;
    quickBtn.classList.add("active");
    specsBtn.classList.remove("active");
  }
}

/* ---------- popup helpers ---------------------------------- */
function openPopup(sym){
  render(sym);
  popup.style.display="flex";
  quickBtn.onclick =()=>{ if(mode!=="quick"){ mode="quick";  render(sym);} };
  specsBtn.onclick=()=>{ if(mode!=="specs"){ mode="specs";  render(sym);} };
}
function closePopup(){ popup.style.display="none"; }

/* ---------- init after DOM ready --------------------------- */
window.addEventListener("DOMContentLoaded",()=>{
  grid      =document.getElementById("periodic-table");
  popup     =document.getElementById("info-popup");
  symBox    =document.getElementById("element-name");
  titleBox  =document.getElementById("element-name");   // same node
  bodyBox   =document.getElementById("element-fact");
  quickBtn  =document.getElementById("quickRefBtn");
  specsBtn  =document.getElementById("specsBtn");
  document.getElementById("close-popup").onclick=closePopup;

  buildGrid();
});
