/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult facts chosen INSIDE popup
   -------------------------------------------------------------------- */

/* ---------- constants ------------------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- dataset: KID  (first 50 shown; add more as needed) ------- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen",   row:1, col:1,  state:"gas",   fun:"I help rockets blast off! 🚀"},
  {sym:"He", name:"Helium",     row:1, col:18, state:"gas",   fun:"I make balloons float! 🎈"},
  {sym:"Li", name:"Lithium",    row:2, col:1,  state:"solid", fun:"Tiny phone batteries love me! 🔋"},
  {sym:"Be", name:"Beryllium",  row:2, col:2,  state:"solid", fun:"I build light spacecraft! 🛸"},
  {sym:"B",  name:"Boron",      row:2, col:13, state:"solid", fun:"Hidden in slime‑making borax! 🧼"},
  {sym:"C",  name:"Carbon",     row:2, col:14, state:"solid", fun:"Diamonds and pencils are both me! 💎✏️"},
  {sym:"N",  name:"Nitrogen",   row:2, col:15, state:"gas",   fun:"Most of the air is actually me! 🌬️"},
  {sym:"O",  name:"Oxygen",     row:2, col:16, state:"gas",   fun:"You breathe me every single moment! ❤️"},
  {sym:"F",  name:"Fluorine",   row:2, col:17, state:"gas",   fun:"I keep your teeth tough! 😁"},
  {sym:"Ne", name:"Neon",       row:2, col:18, state:"gas",   fun:"I light up neon signs! ✨"}
  // Add more elements as needed...
];

/* ---------- dataset: ADULT ------------------------------------------- */
const ELEMENTS_ADULT = [
  {sym:"H",  name:"Hydrogen",   row:1, col:1,  state:"gas",   fun:"The lightest element and primary component of stars."},
  {sym:"He", name:"Helium",     row:1, col:18, state:"gas",   fun:"A noble gas used in cryogenics and lighter-than-air balloons."},
  {sym:"Li", name:"Lithium",    row:2, col:1,  state:"solid", fun:"A soft alkali metal used in rechargeable batteries."},
  {sym:"Be", name:"Beryllium",  row:2, col:2,  state:"solid", fun:"A lightweight metal used in aerospace and X-ray windows."},
  {sym:"B",  name:"Boron",      row:2, col:13, state:"solid", fun:"Used in detergents, glass, and boron-containing compounds."},
  {sym:"C",  name:"Carbon",     row:2, col:14, state:"solid", fun:"Found in all known life; basis of organic chemistry."},
  {sym:"N",  name:"Nitrogen",   row:2, col:15, state:"gas",   fun:"Makes up 78% of Earth's atmosphere."},
  {sym:"O",  name:"Oxygen",     row:2, col:16, state:"gas",   fun:"Essential for respiration and combustion."},
  {sym:"F",  name:"Fluorine",   row:2, col:17, state:"gas",   fun:"Highly reactive; used in Teflon and toothpaste."},
  {sym:"Ne", name:"Neon",       row:2, col:18, state:"gas",   fun:"Used in neon lighting and high-voltage indicators."}
  // Add more adult facts here...
];

/* ---------- user mode toggle ----------------------------------------- */
let mode = "kid"; // or "adult"

function getElementFact(sym) {
  const set = mode === "kid" ? ELEMENTS_KID : ELEMENTS_ADULT;
  return set.find(e => e.sym === sym)?.fun || "No fact found.";
}

function toggleMode() {
  mode = (mode === "kid") ? "adult" : "kid";
  alert(`Switched to ${mode} mode.`);
}

// Expose toggle to button
window.onload = () => {
  const toggleBtn = document.getElementById("toggle-mode");
  if (toggleBtn) toggleBtn.onclick = toggleMode;
};
