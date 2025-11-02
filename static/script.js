// Builds a kid-friendly periodic table for ALL 118 elements
// Data source: Bowserinator periodic-table JSON (public, CORS-enabled)

const GRID = document.getElementById("periodic-table");
const OVERLAY = document.getElementById("overlay");
const POPUP = document.getElementById("popup");
const CLOSE = document.getElementById("close");
const SYMBOL = document.getElementById("symbol");
const NAME = document.getElementById("name");
const CONTENT = document.getElementById("content");

// Simple kid-friendly sentence maker
function kidLine(e) {
  const emojiByCat = {
    "alkali metal": "⚡",
    "alkaline earth metal": "🦴",
    "transition metal": "🔧",
    "post-transition metal": "🔩",
    "metalloid": "🧪",
    "nonmetal": "🌬️",
    "halogen": "🪥",
    "noble gas": "✨",
    "lanthanoid": "🔬",
    "actinoid": "⚛️",
  };
  const emojiByPhase = { solid: "🧱", liquid: "💧", gas: "🌫️" };
  const cat = (e.category || "").toLowerCase();
  const phase = (e.phase || "").toLowerCase();

  // a few special fun ones for famous elements
  const specials = {
    H: "I help rockets fly! 🚀",
    He: "I make balloons float! 🎈",
    Li: "Tiny batteries love me! 🔋",
    C: "Pencils and diamonds are me! ✏️💎",
    N: "Most of the air is me! 🌬️",
    O: "You breathe me! ❤️",
    F: "Toothpaste protector! 😁",
    Ne: "Bright neon signs! ✨",
    Na: "With chlorine I make salt! 🧂",
    Si: "Computer chips love me! 💻",
    Fe: "Magnets and your blood use me! 🧲",
    Cu: "I carry electricity! ⚡",
    Ag: "Super at electricity! ⚡",
    Au: "Shiny treasure that never rusts! 🏆",
    Hg: "I’m a shiny liquid metal! 🌡️",
    I: "Purple wound cleaner iodine! 🩹",
    Xe: "Movie projector flashes! 🎥",
    U: "Strong nuclear power! 🚢",
    Pu: "I warm space robots! 🤖🔥",
  };
  if (specials[e.symbol]) return specials[e.symbol];

  // otherwise compose a gentle default
  const catEmoji = emojiByCat[cat] || "🧪";
  const phaseEmoji = emojiByPhase[phase] || "🧱";
  const simpleCat = cat ? cat.replace(" post-transition", " post-transition") : "element";
  return `A ${simpleCat} that is usually ${phase}. ${catEmoji} ${phaseEmoji}`;
}

// open/close popup
function openPopup(el) {
  SYMBOL.textContent = el.symbol;
  NAME.textContent = el.name;
  // “unstable” flag if no stable isotopes (the dataset has "isotopes" info but we infer from known radioactive sets)
  const radioactiveZ = new Set([43, 61]); // Technetium, Promethium
  if (el.number >= 84) radioactiveZ.add(el.number); // most above 83 are radioactive
  const boom = radioactiveZ.has(el.number) ? " 💥" : "";
  CONTENT.textContent = kidLine(el) + boom;

  OVERLAY.classList.remove("hidden");
  POPUP.classList.remove("hidden");
}
function closePopup() {
  OVERLAY.classList.add("hidden");
  POPUP.classList.add("hidden");
}
OVERLAY.addEventListener("click", closePopup);
CLOSE.addEventListener("click", closePopup);

// color by category
const CAT_COLOR = {
  "alkali metal": "#ffadad",
  "alkaline earth metal": "#ffd6a5",
  "transition metal": "#fdffb6",
  "post-transition metal": "#caffbf",
  metalloid: "#9bf6ff",
  nonmetal: "#a0c4ff",
  halogen: "#bdb2ff",
  "noble gas": "#ffc6ff",
  lanthanoid: "#e0fbfc",
  actinoid: "#d0f4de",
};

// build one square
function makeCell(e) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos; // dataset provides 1..18
  cell.style.gridRowStart = e.ypos;    // dataset provides 1..7
  const cat = (e.category || "").toLowerCase();
  cell.style.background = CAT_COLOR[cat] || "#eaeaea";
  cell.title = e.name;

  const sym = document.createElement("div");
  sym.className = "sym";
  sym.textContent = e.symbol;
  cell.appendChild(sym);

  cell.addEventListener("click", () => openPopup(e));
  return cell;
}

// fetch 118 and render
(async function init() {
  // IMPORTANT: keep the exact filename case for your CSS/HTML
  // Hide popup on first load
  OVERLAY.classList.add("hidden");
  POPUP.classList.add("hidden");

  const url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";
  const res = await fetch(url);
  const data = await res.json();
  const all = data.elements; // array of 118

  GRID.innerHTML = "";
  all.forEach(e => GRID.appendChild(makeCell(e)));
})();
