/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table
   Kid ↔ Adult toggle version
   --------------------------------------------------------------- */

/* ---------- state colours -------------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- KID dataset (symbol, name, row, col, state, fun) ---------- */
const ELEMENTS_KID = [
  /* 1 */ {sym:"H",  name:"Hydrogen",        row:1, col:1,  state:"gas",   fun:"I help rockets blast off! 🚀"},
           {sym:"He", name:"Helium",          row:1, col:18, state:"gas",   fun:"I make balloons float! 🎈"},
  /* 2 */ {sym:"Li", name:"Lithium",         row:2, col:1,  state:"solid", fun:"Tiny batteries love me! 🔋"},
           {sym:"Be", name:"Beryllium",       row:2, col:2,  state:"solid", fun:"I build strong spaceship parts! 🛸"},
           {sym:"B",  name:"Boron",           row:2, col:13, state:"solid", fun:"I hide in slime-making borax! 🧼"},
           {sym:"C",  name:"Carbon",          row:2, col:14, state:"solid", fun:"Diamonds and pencils are both me! 💎✏️"},
           {sym:"N",  name:"Nitrogen",        row:2, col:15, state:"gas",   fun:"Most of our air is me! 🌬️"},
           {sym:"O",  name:"Oxygen",          row:2, col:16, state:"gas",   fun:"You breathe me every second! ❤️"},
           {sym:"F",  name:"Fluorine",        row:2, col:17, state:"gas",   fun:"I help protect your teeth! 😁"},
           {sym:"Ne", name:"Neon",            row:2, col:18, state:"gas",   fun:"I light up bright neon signs! ✨"},
  /* 3 */ {sym:"Na", name:"Sodium",          row:3, col:1,  state:"solid", fun:"I join Cl for salty fries! 🍟"},
           {sym:"Mg", name:"Magnesium",       row:3, col:2,  state:"solid", fun:"Fireworks flash bright white with me! 🎆"},
           {sym:"Al", name:"Aluminium",       row:3, col:13, state:"solid", fun:"Soda cans and planes use me! ✈️"},
           {sym:"Si", name:"Silicon",         row:3, col:14, state:"solid", fun:"Computer chips are my playground! 💻"},
           {sym:"P",  name:"Phosphorus",      row:3, col:15, state:"solid", fun:"Glow sticks glow thanks to me! 🔦"},
           {sym:"S",  name:"Sulfur",          row:3, col:16, state:"solid", fun:"I make volcanoes smell! 🌋"},
           {sym:"Cl", name:"Chlorine",        row:3, col:17, state:"gas",   fun:"I keep pools clean! 🏊"},
           {sym:"Ar", name:"Argon",           row:3, col:18, state:"gas",   fun:"I protect light-bulb filaments! 💡"},
  /* … (kid facts continue for all 118 elements – omitted for brevity) … */
];

/* ---------- ADULT dataset (sym, name, num, mass, row, col, state) ----- */
const ELEMENTS_ADULT = [
  /* 1 */ {sym:"H",  name:"Hydrogen", num:1,   mass:1.008,     row:1, col:1,  state:"gas"},
           {sym:"He", name:"Helium",   num:2,   mass:4.0026,    row:1, col:18, state:"gas"},
  /* 2 */ {sym:"Li", name:"Lithium",  num:3,   mass:6.94,      row:2, col:1,  state:"solid"},
           {sym:"Be", name:"Beryllium",num:4,   mass:9.0122,    row:2, col:2,  state:"solid"},
           {sym:"B",  name:"Boron",    num:5,   mass:10.81,     row:2, col:13, state:"solid"},
           {sym:"C",  name:"Carbon",   num:6,   mass:12.011,    row:2, col:14, state:"solid"},
           {sym:"N",  name:"Nitrogen", num:7,   mass:14.007,    row:2, col:15, state:"gas"},
           {sym:"O",  name:"Oxygen",   num:8,   mass:15.999,    row:2, col:16, state:"gas"},
           {sym:"F",  name:"Fluorine", num:9,   mass:18.998,    row:2, col:17, state:"gas"},
           {sym:"Ne", name:"Neon",     num:10,  mass:20.180,    row:2, col:18, state:"gas"},
  /* … (adult data continues for all 118 elements – omitted for brevity) … */
];

/* ------------------------------------------------------------------ */
/*  colour helper                                                     */
const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/*  current mode: "kid" or "adult"                                    */
let mode  = "kid";
const pop   = document.getElementById("popup");
const table = document.getElementById("table");
const toggleBtn = document.getElementById("toggleMode");

/*  render the table                                                  */
function renderTable() {
  table.innerHTML = "";                       // clear grid
  const data = (mode === "kid") ? ELEMENTS_KID : ELEMENTS_ADULT;

  data.forEach(el => {
    const card = document.createElement("div");
    card.className = "element";
    card.textContent = el.sym;
    card.style.background      = colour(el.state);
    card.style.gridColumnStart = el.col;
    card.style.gridRowStart    = el.row;

    card.onclick = () => showInfo(el);
    table.appendChild(card);
  });
}

/*  popup logic                                                       */
function showInfo(el) {
  document.getElementById("symbol").innerText = el.sym;

  if (mode === "kid") {
    document.getElementById("name").innerText    = el.name;
    document.getElementById("funfact").innerText = el.fun;
  } else {
    document.getElementById("name").innerText    = `${el.name} (Atomic No. ${el.num})`;
    document.getElementById("funfact").innerText = `Standard Atomic Weight: ${el.mass}`;
  }
  pop.classList.remove("hidden");
}

/*  hide popup                                                        */
function hideInfo() { pop.classList.add("hidden"); }
document.getElementById("close").onclick = hideInfo;
document.addEventListener("keydown", e => { if (e.key === "Escape") hideInfo(); });

/*  toggle mode button                                                */
toggleBtn.onclick = () => {
  mode = (mode === "kid") ? "adult" : "kid";
  toggleBtn.innerText = (mode === "kid") ? "Switch to Adult Mode" : "Switch to Kid Mode";
  renderTable();
};

/*  initial render                                                    */
renderTable();

