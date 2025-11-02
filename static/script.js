// DOM
const GRID    = document.getElementById("periodic-table");
const OVERLAY = document.getElementById("overlay");
const POPUP   = document.getElementById("popup");
const CLOSE   = document.getElementById("close");
const SYMBOL  = document.getElementById("symbol");
const NAMEBOX = document.getElementById("name");
const CONTENT = document.getElementById("content");

// kid-friendly sentence
function kidLine(e){
  const specials = {
    H:"I help rockets fly! 🚀", He:"I make balloons float! 🎈", Li:"Tiny batteries love me! 🔋",
    C:"Pencils & diamonds are me! ✏️💎", N:"Most of the air is me! 🌬️", O:"You breathe me! ❤️",
    F:"Toothpaste protector! 😁", Ne:"Bright neon signs! ✨", Na:"With chlorine I make salt! 🧂",
    Si:"Computer chips love me! 💻", Fe:"Magnets & your blood use me! 🧲", Cu:"I carry electricity! ⚡",
    Ag:"Super at electricity! ⚡", Au:"Shiny treasure that never rusts! 🏆", Hg:"I’m a shiny liquid metal! 🌡️",
    I:"Purple wound cleaner! 🩹", Xe:"Movie projector flashes! 🎥", U:"Strong nuclear power! 🚢",
    Pu:"I warm space robots! 🤖🔥"
  };
  if (specials[e.symbol]) return specials[e.symbol];

  const cat = (e.category||"element").toLowerCase();
  const phase = (e.phase||"solid").toLowerCase();
  const emojiByCat = {
    "alkali metal":"⚡","alkaline earth metal":"🦴","transition metal":"🔧","post-transition metal":"🔩",
    "metalloid":"🧪","nonmetal":"🌬️","halogen":"🪥","noble gas":"✨","lanthanoid":"🔬","actinoid":"⚛️"
  };
  const emojiByPhase = {solid:"🧱", liquid:"💧", gas:"🌫️"};
  const catEmoji = emojiByCat[cat] || "🧪";
  const phEmoji  = emojiByPhase[phase] || "🧱";
  return `A ${cat} that is usually ${phase}. ${catEmoji} ${phEmoji}`;
}

// quick “radioactive” flag
function isRadioactiveZ(Z){
  if (Z === 43 || Z === 61) return true; // Tc, Pm
  if (Z >= 84) return true;               // most after Bi are unstable
  return false;
}

// popup controls
function openPopup(e){
  SYMBOL.textContent = e.symbol;
  NAMEBOX.textContent = e.name;
  CONTENT.textContent = kidLine(e) + (isRadioactiveZ(e.number) ? " 💥" : "");

  OVERLAY.classList.remove("hidden");
  POPUP.classList.remove("hidden");
}
function closePopup(){
  OVERLAY.classList.add("hidden");
  POPUP.classList.add("hidden");
}
OVERLAY.addEventListener("click", closePopup);
CLOSE.addEventListener("click", closePopup);

// build one square
function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos; // 1..18
  cell.style.gridRowStart = e.ypos;    // 1..7
  cell.dataset.cat = (e.category||"").toLowerCase();

  const d = document.createElement("div");
  d.className = "sym";
  d.textContent = e.symbol;
  cell.appendChild(d);

  cell.addEventListener("click", () => openPopup(e));
  return cell;
}

// fetch & render 118
(async function init(){
  OVERLAY.classList.add("hidden");
  POPUP.classList.add("hidden");

  const url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";
  const res = await fetch(url);
  const data = await res.json();
  const all = data.elements; // 118

  GRID.innerHTML = "";
  all.forEach(e => GRID.appendChild(makeCell(e)));
})();
