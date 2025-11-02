// ---------- Data (Quick Reference + Atomic Specs) ----------
const QUICK = [
  // symbol, name, row, col, state, kidRef
  ["H","Hydrogen",1,1,"gas","I help rockets fly! 🚀"],
  ["He","Helium",1,18,"gas","I make balloons float! 🎈"],
  ["Li","Lithium",2,1,"solid","Tiny batteries love me! 🔋"],
  ["Be","Beryllium",2,2,"solid","I help make spacecraft light! 🛸"],
  ["B","Boron",2,13,"solid","I hide in slime-making borax! 🧪"],
  ["C","Carbon",2,14,"solid","Pencils & diamonds are me! ✏️💎"],
  ["N","Nitrogen",2,15,"gas","Most of the air is me! 🌬️"],
  ["O","Oxygen",2,16,"gas","You breathe me! ❤️"],
  ["F","Fluorine",2,17,"gas","Toothpaste protector! 😁"],
  ["Ne","Neon",2,18,"gas","Glowy signs! ✨"],
  // add the rest when ready…
];

const SPECS = [
  // symbol, name, number, mass, row, col, state
  ["H","Hydrogen",1,1.008,1,1,"gas"],
  ["He","Helium",2,4.0026,1,18,"gas"],
  ["Li","Lithium",3,6.94,2,1,"solid"],
  ["Be","Beryllium",4,9.0122,2,2,"solid"],
  ["B","Boron",5,10.81,2,13,"solid"],
  ["C","Carbon",6,12.011,2,14,"solid"],
  ["N","Nitrogen",7,14.007,2,15,"gas"],
  ["O","Oxygen",8,15.999,2,16,"gas"],
  ["F","Fluorine",9,18.998,2,17,"gas"],
  ["Ne","Neon",10,20.180,2,18,"gas"],
  // add the rest when ready…
];

// ---------- State ----------
let mode = "quick"; // default ALWAYS Quick Reference
let currentSymbol = null;

// ---------- DOM ----------
const grid = document.getElementById("periodic-table");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const symbolBox = document.getElementById("symbol");
const nameBox = document.getElementById("name");
const contentBox = document.getElementById("content");
const btnQuick = document.getElementById("btnQuick");
const btnSpecs = document.getElementById("btnSpecs");

// ---------- Helpers ----------
const quickBySym = s => QUICK.find(e => e[0] === s);
const specBySym  = s => SPECS.find(e => e[0] === s);

// Build the 18x7 grid by using the SPECS array for positions
function buildGrid(){
  grid.innerHTML = "";
  SPECS.forEach(([sym,name,number,mass,row,col,state])=>{
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.state = state || "unknown";
    cell.style.gridColumnStart = col;
    cell.style.gridRowStart = row;
    cell.textContent = sym;
    cell.title = name;
    cell.onclick = () => openPopup(sym);
    grid.appendChild(cell);
  });
}

function setMode(newMode){
  if(mode === newMode) return;
  mode = newMode;
  // re-render popup if open
  if(!popup.classList.contains("hidden") && currentSymbol){
    renderPopup(currentSymbol);
  }
  // toggle button appearance
  btnQuick.classList.toggle("active", mode === "quick");
  btnSpecs.classList.toggle("active", mode === "specs");
}

function renderPopup(sym){
  currentSymbol = sym;

  const q = quickBySym(sym);
  const s = specBySym(sym);

  symbolBox.textContent = sym;
  nameBox.textContent = (mode === "quick" && q) ? q[1] : (s ? s[1] : sym);

  if(mode === "quick"){
    // kid-friendly sentence
    contentBox.textContent = q ? q[5] : "Fun fact coming soon!";
  }else{
    // atomic specs
    if(s){
      const [,name,number,mass] = s;
      contentBox.textContent = `Atomic Number: ${number} • Atomic Mass: ${mass}`;
    }else{
      contentBox.textContent = "Data coming soon.";
    }
  }
}

function openPopup(sym){
  // ALWAYS default to Quick Reference on open
  mode = "quick";
  btnQuick.classList.add("active");
  btnSpecs.classList.remove("active");

  renderPopup(sym);
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
}

function closePopup(){
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
}

// ---------- Events ----------
btnQuick.addEventListener("click", ()=> setMode("quick"));
btnSpecs.addEventListener("click", ()=> setMode("specs"));
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

// ---------- Init ----------
buildGrid();
