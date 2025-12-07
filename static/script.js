// --- ELEMENTS DATA ---
const ELEMENTS = [
    { number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", xpos: 1, ypos: 1, desc: "The universe’s first ingredient ⭐" },
    { number: 2, symbol: "He", name: "Helium", category: "noble-gas", xpos: 18, ypos: 1, desc: "Makes balloons float and voices squeaky 🎈" },
    { number: 3, symbol: "Li", name: "Lithium", category: "alkali-metal", xpos: 1, ypos: 2, desc: "Powers small batteries in toys 🔋" },
    { number: 4, symbol: "Be", name: "Beryllium", category: "alkaline-earth-metal", xpos: 2, ypos: 2, desc: "Super light metal used in space tech 🚀" },
    { number: 5, symbol: "B", name: "Boron", category: "metalloid", xpos: 13, ypos: 2, desc: "Helps make strong, unbreakable glass 🛡️" },
    { number: 6, symbol: "C", name: "Carbon", category: "nonmetal", xpos: 14, ypos: 2, desc: "Builds everything alive… and diamonds! 💎" },
    { number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", xpos: 15, ypos: 2, desc: "Most of the air you breathe is this 🌬️" },
    { number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", xpos: 16, ypos: 2, desc: "Your lungs’ favorite friend 💨" },
    { number: 9, symbol: "F", name: "Fluorine", category: "nonmetal", xpos: 17, ypos: 2, desc: "Found in toothpaste for strong teeth 😁" },
    { number: 10, symbol: "Ne", name: "Neon", category: "noble-gas", xpos: 18, ypos: 2, desc: "Makes bright glowing signs in cities ✨" },
    { number: 11, symbol: "Na", name: "Sodium", category: "alkali-metal", xpos: 1, ypos: 3, desc: "Half of table salt 🧂" },
    { number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline-earth-metal", xpos: 2, ypos: 3, desc: "Makes bright fireworks flashes 🎆" },
    { number: 13, symbol: "Al", name: "Aluminum", category: "post-transition-metal", xpos: 13, ypos: 3, desc: "Light metal in cans and foil 🥫" },
    { number: 14, symbol: "Si", name: "Silicon", category: "metalloid", xpos: 14, ypos: 3, desc: "The brain of computers and phones 💻" },
    { number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", xpos: 15, ypos: 3, desc: "Glows faintly in the dark 🌟" },
    { number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", xpos: 16, ypos: 3, desc: "Smells like rotten eggs but helps plants 🌱" },
    { number: 17, symbol: "Cl", name: "Chlorine", category: "nonmetal", xpos: 17, ypos: 3, desc: "Keeps swimming pools clean 🏊" },
    { number: 18, symbol: "Ar", name: "Argon", category: "noble-gas", xpos: 18, ypos: 3, desc: "A shy gas that doesn’t react with anyone 😶" },
    { number: 19, symbol: "K", name: "Potassium", category: "alkali-metal", xpos: 1, ypos: 4, desc: "Bananas love this element 🍌" },
    { number: 20, symbol: "Ca", name: "Calcium", category: "alkaline-earth-metal", xpos: 2, ypos: 4, desc: "Builds strong bones and teeth 💪" },
    { number: 21, symbol: "Sc", name: "Scandium", category: "transition-metal", xpos: 3, ypos: 4, desc: "Makes strong sports equipment 🏀" },
    { number: 22, symbol: "Ti", name: "Titanium", category: "transition-metal", xpos: 4, ypos: 4, desc: "Super strong metal used in planes ✈️" },
    { number: 23, symbol: "V", name: "Vanadium", category: "transition-metal", xpos: 5, ypos: 4, desc: "Helps make steel extra tough ⚙️" },
    { number: 24, symbol: "Cr", name: "Chromium", category: "transition-metal", xpos: 6, ypos: 4, desc: "Gives metal a shiny sparkle ✨" },
    { number: 25, symbol: "Mn", name: "Manganese", category: "transition-metal", xpos: 7, ypos: 4, desc: "Helps batteries last longer 🔋" },
    { number: 26, symbol: "Fe", name: "Iron", category: "transition-metal", xpos: 8, ypos: 4, desc: "Helps your blood carry oxygen ❤️‍🔥" },
    { number: 27, symbol: "Co", name: "Cobalt", category: "transition-metal", xpos: 9, ypos: 4, desc: "Makes beautiful blue glass 🔵" },
    { number: 28, symbol: "Ni", name: "Nickel", category: "transition-metal", xpos: 10, ypos: 4, desc: "Strong metal used in coins 💰" },
    { number: 29, symbol: "Cu", name: "Copper", category: "transition-metal", xpos: 11, ypos: 4, desc: "Great at carrying electricity ⚡" },
    { number: 30, symbol: "Zn", name: "Zinc", category: "transition-metal", xpos: 12, ypos: 4, desc: "Protects metal from rusting 🛠️" },
    { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition-metal", xpos: 13, ypos: 4, desc: "Melts in your hand—so cool! 🤯" },
    { number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", xpos: 14, ypos: 4, desc: "Helps your phone send signals 📱" },
    { number: 33, symbol: "As", name: "Arsenic", category: "metalloid", xpos: 15, ypos: 4, desc: "Appears in old mystery stories 🕵️‍♂️" },
    { number: 34, symbol: "Se", name: "Selenium", category: "nonmetal", xpos: 16, ypos: 4, desc: "Helps solar panels absorb sunlight ☀️" },
    { number: 35, symbol: "Br", name: "Bromine", category: "nonmetal", xpos: 17, ypos: 4, desc: "The only liquid non-metal at room temp 💧" },
    { number: 36, symbol: "Kr", name: "Krypton", category: "noble-gas", xpos: 18, ypos: 4, desc: "Glows brightly (Superman jokes allowed 😎)" },
    { number: 37, symbol: "Rb", name: "Rubidium", category: "alkali-metal", xpos: 1, ypos: 5, desc: "Reacts so fast it can explode in water 💥" },
    { number: 38, symbol: "Sr", name: "Strontium", category: "alkaline-earth-metal", xpos: 2, ypos: 5, desc: "Makes fireworks bright red 🔴" },
    { number: 39, symbol: "Y", name: "Yttrium", category: "transition-metal", xpos: 3, ypos: 5, desc: "Helps TVs show bright colors 📺" },
    { number: 40, symbol: "Zr", name: "Zirconium", category: "transition-metal", xpos: 4, ypos: 5, desc: "Used in sparkly fake diamonds 💍" },
    { number: 41, symbol: "Nb", name: "Niobium", category: "transition-metal", xpos: 5, ypos: 5, desc: "Great for rockets and jet engines 🚀" },
    { number: 42, symbol: "Mo", name: "Molybdenum", category: "transition-metal", xpos: 6, ypos: 5, desc: "Helps plants grow 🌾" },
    { number: 43, symbol: "Tc", name: "Technetium", category: "transition-metal", xpos: 7, ypos: 5, desc: "First man-made element 🧪" },
    { number: 44, symbol: "Ru", name: "Ruthenium", category: "transition-metal", xpos: 8, ypos: 5, desc: "Helps make hard-wearing metal 🔩" },
    { number: 45, symbol: "Rh", name: "Rhodium", category: "transition-metal", xpos: 9, ypos: 5, desc: "Super shiny and rare ✨" },
    { number: 46, symbol: "Pd", name: "Palladium", category: "transition-metal", xpos: 10, ypos: 5, desc: "Helps clean car exhaust 🚗" },
    { number: 47, symbol: "Ag", name: "Silver", category: "transition-metal", xpos: 11, ypos: 5, desc: "The shiniest metal on Earth 🌟" },
    { number: 48, symbol: "Cd", name: "Cadmium", category: "transition-metal", xpos: 12, ypos: 5, desc: "Gives bright yellow paint 🎨" },
    { number: 49, symbol: "In", name: "Indium", category: "post-transition-metal", xpos: 13, ypos: 5, desc: "Makes the funny “tin cry” sound 😮" },
    { number: 50, symbol: "Sn", name: "Tin", category: "post-transition-metal", xpos: 14, ypos: 5, desc: "Coats cans to stop them from rusting 🥫" },
    { number: 51, symbol: "Sb", name: "Antimony", category: "metalloid", xpos: 15, ypos: 5, desc: "Helps fireworks sparkle 🎇" },
    { number: 52, symbol: "Te", name: "Tellurium", category: "metalloid", xpos: 16, ypos: 5, desc: "Makes metals super tough 💪" },
    { number: 53, symbol: "I", name: "Iodine", category: "nonmetal", xpos: 17, ypos: 5, desc: "Helps your body stay healthy 🤸" },
    { number: 54, symbol: "Xe", name: "Xenon", category: "noble-gas", xpos: 18, ypos: 5, desc: "Glows blue in special lamps 🔵" },
    { number: 55, symbol: "Cs", name: "Cesium", category: "alkali-metal", xpos: 1, ypos: 6, desc: "Explodes dramatically in water 💦💥" },
    { number: 56, symbol: "Ba", name: "Barium", category: "alkaline-earth-metal", xpos: 2, ypos: 6, desc: "Used in glowing green fireworks 💚🎆" },
    { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", xpos: 3, ypos: 9, desc: "Found in camera lenses 📸" },
    { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", xpos: 4, ypos: 9, desc: "Used in lighter flints 🔥" },
    { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", xpos: 5, ypos: 9, desc: "Helps lasers shine 💚" },
    { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", xpos: 6, ypos: 9, desc: "Makes super strong magnets 🧲" },
    { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", xpos: 7, ypos: 9, desc: "A glowing radioactive element 💡" },
    { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", xpos: 8, ypos: 9, desc: "Makes headphones work better 🎧" },
    { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", xpos: 9, ypos: 9, desc: "Helps make bright red TV colors 📺🔴" },
    { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", xpos: 10, ypos: 9, desc: "Helps doctors take MRI images 🏥" },
    { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", xpos: 11, ypos: 9, desc: "Makes glowing green lights 🟢" },
    { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", xpos: 12, ypos: 9, desc: "Found in hard drives 💽" },
    { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", xpos: 13, ypos: 9, desc: "Super magnetic! 🧲" },
    { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", xpos: 14, ypos: 9, desc: "Strengthens fiber-optic cables 🌐" },
    { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", xpos: 15, ypos: 9, desc: "One of the rarest elements 🌟" },
    { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", xpos: 16, ypos: 9, desc: "Helps keep atomic clocks accurate ⏱️" },
    { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", xpos: 17, ypos: 9, desc: "Very dense and heavy ⚖️" },
    { number: 72, symbol: "Hf", name: "Hafnium", category: "transition-metal", xpos: 4, ypos: 6, desc: "Used in nuclear control rods ☢️" },
    { number: 73, symbol: "Ta", name: "Tantalum", category: "transition-metal", xpos: 5, ypos: 6, desc: "Helps your phone store energy 📱⚡" },
    { number: 74, symbol: "W", name: "Tungsten", category: "transition-metal", xpos: 6, ypos: 6, desc: "Has the highest melting point 🔥" },
    { number: 75, symbol: "Re", name: "Rhenium", category: "transition-metal", xpos: 7, ypos: 6, desc: "Used in fancy jet engines ✈️" },
    { number: 76, symbol: "Os", name: "Osmium", category: "transition-metal", xpos: 8, ypos: 6, desc: "The densest metal on Earth 🪨" },
    { number: 77, symbol: "Ir", name: "Iridium", category: "transition-metal", xpos: 9, ypos: 6, desc: "Found in meteorites ☄️" },
    { number: 78, symbol: "Pt", name: "Platinum", category: "transition-metal", xpos: 10, ypos: 6, desc: "Rare, shiny, and never rusts ✨" },
    { number: 79, symbol: "Au", name: "Gold", category: "transition-metal", xpos: 11, ypos: 6, desc: "Shiny treasure pirates love 🏴‍☠️💰" },
    { number: 80, symbol: "Hg", name: "Mercury", category: "transition-metal", xpos: 12, ypos: 6, desc: "A metal that’s liquid at room temp 🌡️" },
    { number: 81, symbol: "Tl", name: "Thallium", category: "post-transition-metal", xpos: 13, ypos: 6, desc: "Used in special electronics ⚡" },
    { number: 82, symbol: "Pb", name: "Lead", category: "post-transition-metal", xpos: 14, ypos: 6, desc: "Very heavy and blocks radiation 🛡️" },
    { number: 83, symbol: "Bi", name: "Bismuth", category: "post-transition-metal", xpos: 15, ypos: 6, desc: "Makes rainbow crystals 🌈" },
    { number: 84, symbol: "Po", name: "Polonium", category: "post-transition-metal", xpos: 16, ypos: 6, desc: "Very radioactive ⚠️" },
    { number: 85, symbol: "At", name: "Astatine", category: "nonmetal", xpos: 17, ypos: 6, desc: "So rare no one has ever seen a full gram 😲" },
    { number: 86, symbol: "Rn", name: "Radon", category: "noble-gas", xpos: 18, ypos: 6, desc: "Heavy gas found underground 🕳️" },
    { number: 87, symbol: "Fr", name: "Francium", category: "alkali-metal", xpos: 1, ypos: 7, desc: "One of the most reactive metals ⚡💥" },
    { number: 88, symbol: "Ra", name: "Radium", category: "alkaline-earth-metal", xpos: 2, ypos: 7, desc: "Used to glow in the dark long ago 🌟" },
    { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", xpos: 3, ypos: 10, desc: "Glows faintly blue 🔵" },
    { number: 90, symbol: "Th", name: "Thorium", category: "actinide", xpos: 4, ypos: 10, desc: "Glows when heated 🔥" },
    { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", xpos: 5, ypos: 10, desc: "Comes right before actinium in decay ☢️" },
    { number: 92, symbol: "U", name: "Uranium", category: "actinide", xpos: 6, ypos: 10, desc: "Powers nuclear reactors ⚛️" },
    { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", xpos: 7, ypos: 10, desc: "Named after planet Neptune 🔵" },
    { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", xpos: 8, ypos: 10, desc: "Helps power deep-space probes 🚀" },
    { number: 95, symbol: "Am", name: "Americium", category: "actinide", xpos: 9, ypos: 10, desc: "Inside smoke detectors 🚨" },
    { number: 96, symbol: "Cm", name: "Curium", category: "actinide", xpos: 10, ypos: 10, desc: "Named after Marie Curie 🧪" },
    { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", xpos: 11, ypos: 10, desc: "Named after Berkeley, California 🏫" },
    { number: 98, symbol: "Cf", name: "Californium", category: "actinide", xpos: 12, ypos: 10, desc: "Only made in labs 🧬" },
    { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", xpos: 13, ypos: 10, desc: "Named after Albert Einstein 🤓" },
    { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", xpos: 14, ypos: 10, desc: "Named after Enrico Fermi 🧠" },
    { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", xpos: 15, ypos: 10, desc: "Honors the creator of the periodic table 📘" },
    { number: 102, symbol: "No", name: "Nobelium", category: "actinide", xpos: 16, ypos: 10, desc: "Named after the Nobel Prize guy 🏅" },
    { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", xpos: 17, ypos: 10, desc: "Named after a famous scientist 🔬" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", category: "transition-metal", xpos: 4, ypos: 7, desc: "Honors atom pioneer Ernest Rutherford ⚛️" },
    { number: 105, symbol: "Db", name: "Dubnium", category: "transition-metal", xpos: 5, ypos: 7, desc: "Named after Dubna, Russia 🌍" },
    { number: 106, symbol: "Sg", name: "Seaborgium", category: "transition-metal", xpos: 6, ypos: 7, desc: "Named after Glenn Seaborg 🧪" },
    { number: 107, symbol: "Bh", name: "Bohrium", category: "transition-metal", xpos: 7, ypos: 7, desc: "Honors Niels Bohr 🧠" },
    { number: 108, symbol: "Hs", name: "Hassium", category: "transition-metal", xpos: 8, ypos: 7, desc: "Named after the German region Hesse 🇩🇪" },
    { number: 109, symbol: "Mt", name: "Meitnerium", category: "transition-metal", xpos: 9, ypos: 7, desc: "Honors physicist Lise Meitner 👩‍🔬" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", category: "transition-metal", xpos: 10, ypos: 7, desc: "Named after Darmstadt, Germany 🏙️" },
    { number: 111, symbol: "Rg", name: "Roentgenium", category: "transition-metal", xpos: 11, ypos: 7, desc: "Named after the X-ray discoverer 💡" },
    { number: 112, symbol: "Cn", name: "Copernicium", category: "transition-metal", xpos: 12, ypos: 7, desc: "Honors astronomer Copernicus 🌌" },
    { number: 113, symbol: "Nh", name: "Nihonium", category: "post-transition-metal", xpos: 13, ypos: 7, desc: "Japan’s first discovered element 🇯🇵" },
    { number: 114, symbol: "Fl", name: "Flerovium", category: "post-transition-metal", xpos: 14, ypos: 7, desc: "Named after the Flerov Lab 🧪" },
    { number: 115, symbol: "Mc", name: "Moscovium", category: "post-transition-metal", xpos: 15, ypos: 7, desc: "Honors Moscow 🇷🇺" },
    { number: 116, symbol: "Lv", name: "Livermorium", category: "post-transition-metal", xpos: 16, ypos: 7, desc: "Named after Livermore, California 🌉" },
    { number: 117, symbol: "Ts", name: "Tennessine", category: "nonmetal", xpos: 17, ypos: 7, desc: "Named for Tennessee 🎸" },
    { number: 118, symbol: "Og", name: "Oganesson", category: "noble-gas", xpos: 18, ypos: 7, desc: "Probably the weirdest gas ever discovered 😶‍🌫️" }
];

// --- STATE VARIABLES ---
let quizActive = false;
let currentTarget = null;

// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
    renderGrid();
    renderFilters();
});

function byId(id) { return document.getElementById(id); }
function colourKey(cat="") { return (cat || "").toLowerCase().replace(/\s+/g, "-"); }

function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.id = "el-" + e.number; 
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart    = e.ypos;
  cell.dataset.cat = colourKey(e.category); 

  const num = (e.number);
  const sym = (e.symbol);
  const name = (e.name);

  cell.innerHTML = `
    <div class="num">${num}</div>
    <div class="sym">${sym}</div>
    <div class="el-name">${name}</div>
  `;

  cell.addEventListener("click", () => handleClick(e));

  return cell;
}

function renderGrid() {
  const grid = byId("periodic-table");
  grid.innerHTML = ""; 
  grid.classList.add("pt-grid");

  ELEMENTS.forEach(e => grid.appendChild(makeCell(e)));
}

// --- NEW FEATURES ---

// 1. CLICK HANDLER (Handles Popup OR Quiz)
function handleClick(e) {
    if (quizActive) {
        checkAnswer(e);
    } else {
        openPopup(e);
    }
}

// 2. FILTER SYSTEM
function renderFilters() {
    const categories = [...new Set(ELEMENTS.map(e => e.category))];
    const container = byId("filters");
    
    // Clear previous filters if any (avoids duplicates on reload)
    container.innerHTML = "";

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.replace(/-/g, " ").toUpperCase();
        btn.className = "btn filter-btn";
        btn.onclick = () => applyFilter(cat, btn);
        container.appendChild(btn);
    });
}

function applyFilter(category, btn) {
    // Reset visual state
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        if (cell.dataset.cat === colourKey(category)) {
            cell.classList.remove("dimmed");
        } else {
            cell.classList.add("dimmed");
        }
    });
}

function resetView() {
    quizActive = false;
    currentTarget = null;
    byId("quiz-display").classList.add("hidden");
    byId("element-card").classList.add("hidden");
    
    // Undim everything
    document.querySelectorAll(".cell").forEach(c => c.classList.remove("dimmed"));
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
}

// 3. QUIZ MODE
function startQuiz() {
    resetView();
    quizActive = true;
    
    // Pick a random element
    const randomIndex = Math.floor(Math.random() * ELEMENTS.length);
    currentTarget = ELEMENTS[randomIndex];

    // Show the question UI
    const quizBox = byId("quiz-display");
    quizBox.classList.remove("hidden");
    
    byId("quiz-question").innerHTML = `Find the element that: <br> <em>"${currentTarget.desc}"</em>`;
    byId("quiz-feedback").textContent = "Go find it! 👇";
    byId("quiz-feedback").style.color = "black";
}

function checkAnswer(clickedElement) {
    const feedback = byId("quiz-feedback");
    
    if (clickedElement.number === currentTarget.number) {
        feedback.textContent = "Correct! W! 🎉";
        feedback.style.color = "#27ae60";
        setTimeout(() => {
            alert(`You found ${clickedElement.name}! Ready for another?`);
            startQuiz();
        }, 500);
    } else {
        feedback.textContent = "Nope! That's " + clickedElement.name + ". Try again!";
        feedback.style.color = "#c0392b";
    }
}

// --- POPUP LOGIC ---
function openPopup(elementData) {
  const elementCard = byId("element-card");
  elementCard.classList.remove("hidden");
  byId("element-symbol").textContent = elementData.symbol;
  byId("element-name").textContent = elementData.name;
  byId("element-fact").textContent = elementData.desc;
}

function closeCard() {
  byId("element-card").classList.add("hidden");
}
// Expose to window so HTML can see it
window.closeCard = closeCard;
// Expose startQuiz and resetView too, just to be super safe
window.startQuiz = startQuiz;
window.resetView = resetView;
