// --- ELEMENTS DATA ---
// This array contains data for all 118 elements.
// This is what your script.js uses to build the periodic table.
const ELEMENTS = [
    { number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", xpos: 1, ypos: 1, desc: "Lightest element, makes up most of the universe. Essential for water! 💧" },
    { number: 2, symbol: "He", name: "Helium", category: "noble-gas", xpos: 18, ypos: 1, desc: "Second lightest element, used in balloons and for cooling. 🎈" },
    { number: 3, symbol: "Li", name: "Lithium", category: "alkali-metal", xpos: 1, ypos: 2, desc: "Used in batteries for your phone and laptop! 🔋" },
    { number: 4, symbol: "Be", name: "Beryllium", category: "alkaline-earth-metal", xpos: 2, ypos: 2, desc: "Strong and lightweight, used in aerospace. 🚀" },
    { number: 5, symbol: "B", name: "Boron", category: "metalloid", xpos: 13, ypos: 2, desc: "Found in boric acid and used in some detergents. ✨" },
    { number: 6, symbol: "C", name: "Carbon", category: "nonmetal", xpos: 14, ypos: 2, desc: "The basis of all life on Earth! Found in diamonds and graphite. 💎" },
    { number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", xpos: 15, ypos: 2, desc: "Makes up most of the air we breathe. 🌬️" },
    { number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", xpos: 16, ypos: 2, desc: "What we breathe to live! Also helps fires burn. 🔥" },
    { number: 9, symbol: "F", name: "Fluorine", category: "nonmetal", xpos: 17, ypos: 2, desc: "Used in toothpaste to protect your teeth. 🦷" },
    { number: 10, symbol: "Ne", name: "Neon", category: "noble-gas", xpos: 18, ypos: 2, desc: "Makes bright, colorful signs glow! 💡" },
    { number: 11, symbol: "Na", name: "Sodium", category: "alkali-metal", xpos: 1, ypos: 3, desc: "Part of table salt! Can react strongly with water. 🧂" },
    { number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline-earth-metal", xpos: 2, ypos: 3, desc: "Used in flares and fireworks for bright white light. 🎆" },
    { number: 13, symbol: "Al", name: "Aluminum", category: "post-transition-metal", xpos: 13, ypos: 3, desc: "Lightweight and strong, used in soda cans and airplane parts. ✈️" },
    { number: 14, symbol: "Si", name: "Silicon", category: "metalloid", xpos: 14, ypos: 3, desc: "The main ingredient in computer chips and sand. 💻🏖️" },
    { number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", xpos: 15, ypos: 3, desc: "Important for bones, DNA, and found on match tips. 🦴" },
    { number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", xpos: 16, ypos: 3, desc: "Smells like rotten eggs! Used in gunpowder and fertilizers. 🥚" },
    { number: 17, symbol: "Cl", name: "Chlorine", category: "nonmetal", xpos: 17, ypos: 3, desc: "Used to purify swimming pools and drinking water. 🏊" },
    { number: 18, symbol: "Ar", name: "Argon", category: "noble-gas", xpos: 18, ypos: 3, desc: "Fills light bulbs to prevent the filament from burning out. 💡" },
    { number: 19, symbol: "K", name: "Potassium", category: "alkali-metal", xpos: 1, ypos: 4, desc: "Found in bananas and important for your heart. 🍌" },
    { number: 20, symbol: "Ca", name: "Calcium", category: "alkaline-earth-metal", xpos: 2, ypos: 4, desc: "Builds strong bones and teeth! Found in milk. 🥛" },
    { number: 21, symbol: "Sc", name: "Scandium", category: "transition-metal", xpos: 3, ypos: 4, desc: "Used in some sports equipment like bicycle frames. 🚴" },
    { number: 22, symbol: "Ti", name: "Titanium", category: "transition-metal", xpos: 4, ypos: 4, desc: "Very strong and light, used in medical implants and jewelry. 💍" },
    { number: 23, symbol: "V", name: "Vanadium", category: "transition-metal", xpos: 5, ypos: 4, desc: "Makes steel stronger, used in tools and car parts. 🔧" },
    { number: 24, symbol: "Cr", name: "Chromium", category: "transition-metal", xpos: 6, ypos: 4, desc: "Gives a shiny, corrosion-resistant finish to car parts. ✨" },
    { number: 25, symbol: "Mn", name: "Manganese", category: "transition-metal", xpos: 7, ypos: 4, desc: "Used to make strong steel and in some batteries. 🔋" },
    { number: 26, symbol: "Fe", name: "Iron", category: "transition-metal", xpos: 8, ypos: 4, desc: "What magnets stick to! Essential for making steel. 🧲" },
    { number: 27, symbol: "Co", name: "Cobalt", category: "transition-metal", xpos: 9, ypos: 4, desc: "Used in brilliant blue pigments and rechargeable batteries. 🔵" },
    { number: 28, symbol: "Ni", name: "Nickel", category: "transition-metal", xpos: 10, ypos: 4, desc: "Used in coins and to make stainless steel. 🪙" },
    { number: 29, symbol: "Cu", name: "Copper", category: "transition-metal", xpos: 11, ypos: 4, desc: "Great conductor of electricity, found in wires and pipes. 🔌" },
    { number: 30, symbol: "Zn", name: "Zinc", category: "transition-metal", xpos: 12, ypos: 4, desc: "Used to galvanize steel and in some cold remedies. 🛡️" },
    { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition-metal", xpos: 13, ypos: 4, desc: "Melts in your hand! Used in LED lights. 💡" },
    { number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", xpos: 14, ypos: 4, desc: "Used in fiber optics and some electronics. 🌐" },
    { number: 33, symbol: "As", name: "Arsenic", category: "metalloid", xpos: 15, ypos: 4, desc: "Known for being poisonous, but also used in semiconductors. ☠️" },
    { number: 34, symbol: "Se", name: "Selenium", category: "nonmetal", xpos: 16, ypos: 4, desc: "Used in solar cells and some shampoos. ☀️🧴" },
    { number: 35, symbol: "Br", name: "Bromine", category: "nonmetal", xpos: 17, ypos: 4, desc: "A liquid at room temperature, used in flame retardants. 🔥" },
    { number: 36, symbol: "Kr", name: "Krypton", category: "noble-gas", xpos: 18, ypos: 4, desc: "Used in some high-performance light bulbs and lasers. ⚡" },
    { number: 37, symbol: "Rb", name: "Rubidium", category: "alkali-metal", xpos: 1, ypos: 5, desc: "Highly reactive, used in atomic clocks. 🕰️" },
    { number: 38, symbol: "Sr", name: "Strontium", category: "alkaline-earth-metal", xpos: 2, ypos: 5, desc: "Gives fireworks a bright red color. 💥" },
    { number: 39, symbol: "Y", name: "Yttrium", category: "transition-metal", xpos: 3, ypos: 5, desc: "Used in color TV screens (red phosphors). 📺" },
    { number: 40, symbol: "Zr", name: "Zirconium", category: "transition-metal", xpos: 4, ypos: 5, desc: "Very resistant to corrosion, used in nuclear reactors. ☢️" },
    { number: 41, symbol: "Nb", name: "Niobium", category: "transition-metal", xpos: 5, ypos: 5, desc: "Used in superconducting magnets and jet engines. ✈️" },
    { number: 42, symbol: "Mo", name: "Molybdenum", category: "transition-metal", xpos: 6, ypos: 5, desc: "Makes steel harder and more resistant to heat. 🔥" },
    { number: 43, symbol: "Tc", name: "Technetium", category: "transition-metal", xpos: 7, ypos: 5, desc: "The first element made artificially, used in medical scans. 🩺" },
    { number: 44, symbol: "Ru", name: "Ruthenium", category: "transition-metal", xpos: 8, ypos: 5, desc: "Used to harden platinum and palladium in electrical contacts. 💡" },
    { number: 45, symbol: "Rh", name: "Rhodium", category: "transition-metal", xpos: 9, ypos: 5, desc: "One of the most expensive metals, used in catalytic converters. 🚗" },
    { number: 46, symbol: "Pd", name: "Palladium", category: "transition-metal", xpos: 10, ypos: 5, desc: "Used in catalytic converters, jewelry, and dentistry. 💍" },
    { number: 47, symbol: "Ag", name: "Silver", category: "transition-metal", xpos: 11, ypos: 5, desc: "Shiny and good conductor, used in jewelry and photography. 📸" },
    { number: 48, symbol: "Cd", name: "Cadmium", category: "transition-metal", xpos: 12, ypos: 5, desc: "Used in batteries (NiCd) and as a pigment, but toxic. 🔋☠️" },
    { number: 49, symbol: "In", name: "Indium", category: "post-transition-metal", xpos: 13, ypos: 5, desc: "Soft, silvery metal used in LCD screens. 📱" },
    { number: 50, symbol: "Sn", name: "Tin", category: "post-transition-metal", xpos: 14, ypos: 5, desc: "Used to coat steel cans and in solder. 🥫" },
    { number: 51, symbol: "Sb", name: "Antimony", category: "metalloid", xpos: 15, ypos: 5, desc: "Used in flame retardants and some batteries. 🔥" },
    { number: 52, symbol: "Te", name: "Tellurium", category: "metalloid", xpos: 16, ypos: 5, desc: "Used in CDs, DVDs, and some thermoelectric devices. 💿" },
    { number: 53, symbol: "I", name: "Iodine", category: "nonmetal", xpos: 17, ypos: 5, desc: "An antiseptic, also important for thyroid health. 🩹" },
    { number: 54, symbol: "Xe", name: "Xenon", category: "noble-gas", xpos: 18, ypos: 5, desc: "Used in powerful lights, like car headlights and projectors. 🚗" },
    { number: 55, symbol: "Cs", name: "Cesium", category: "alkali-metal", xpos: 1, ypos: 6, desc: "Most reactive metal, used in atomic clocks. ⏱️" },
    { number: 56, symbol: "Ba", name: "Barium", category: "alkaline-earth-metal", xpos: 2, ypos: 6, desc: "Used in medical imaging for X-rays (barium meal). 🩺" },
    { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", xpos: 3, ypos: 9, desc: "Used in camera lenses and lighter flints. 📸" },
    { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", xpos: 4, ypos: 9, desc: "Used in self-cleaning ovens and lighter flints. 🔥" },
    { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", xpos: 5, ypos: 9, desc: "Used to make powerful magnets and yellow glass. 🧲" },
    { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", xpos: 6, ypos: 9, desc: "Creates the strongest permanent magnets! 🧲" },
    { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", xpos: 7, ypos: 9, desc: "Radioactive element, used in some specialized batteries. ☢️" },
    { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", xpos: 8, ypos: 9, desc: "Used in magnets and as a neutron absorber in nuclear reactors. 🧲" },
    { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", xpos: 9, ypos: 9, desc: "Gives red color to TV screens and fluorescent lamps. 🔴" },
    { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", xpos: 10, ypos: 9, desc: "Used in MRI scans and as a neutron absorber. 🧠" },
    { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", xpos: 11, ypos: 9, desc: "Gives green color to TV screens and fluorescent lamps. 🟢" },
    { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", xpos: 12, ypos: 9, desc: "Used in lasers and in hard disk drives. 💿" },
    { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", xpos: 13, ypos: 9, desc: "Strongest magnetic moment of any element. 🧲" },
    { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", xpos: 14, ypos: 9, desc: "Used in optical fibers and some medical lasers. 🌐" },
    { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", xpos: 15, ypos: 9, desc: "Used in portable X-ray machines. 📷" },
    { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", xpos: 16, ypos: 9, desc: "Used in some lasers and to study high-pressure conditions. 🧪" },
    { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", xpos: 17, ypos: 9, desc: "Used in positron emission tomography (PET) scanners. 🧠" },
    { number: 72, symbol: "Hf", name: "Hafnium", category: "transition-metal", xpos: 4, ypos: 6, desc: "Used in control rods for nuclear reactors. ☢️" },
    { number: 73, symbol: "Ta", name: "Tantalum", category: "transition-metal", xpos: 5, ypos: 6, desc: "Highly corrosion-resistant, used in surgical implants and capacitors. 🩹" },
    { number: 74, symbol: "W", name: "Tungsten", category: "transition-metal", xpos: 6, ypos: 6, desc: "Has the highest melting point of all metals, used in light bulb filaments. 💡" },
    { number: 75, symbol: "Re", name: "Rhenium", category: "transition-metal", xpos: 7, ypos: 6, desc: "Used in jet engines and high-temperature alloys. ✈️" },
    { number: 76, symbol: "Os", name: "Osmium", category: "transition-metal", xpos: 8, ypos: 6, desc: "Densest naturally occurring element, used in pen tips. ✒️" },
    { number: 77, symbol: "Ir", name: "Iridium", category: "transition-metal", xpos: 9, ypos: 6, desc: "Very corrosion-resistant, used in spark plugs and medical implants. ⚙️" },
    { number: 78, symbol: "Pt", name: "Platinum", category: "transition-metal", xpos: 10, ypos: 6, desc: "Precious metal, used in jewelry, catalytic converters, and lab equipment. 💍" },
    { number: 79, symbol: "Au", name: "Gold", category: "transition-metal", xpos: 11, ypos: 6, desc: "Valuable precious metal, good conductor, used in jewelry and electronics. 💰" },
    { number: 80, symbol: "Hg", name: "Mercury", category: "transition-metal", xpos: 12, ypos: 6, desc: "Liquid metal at room temperature, used in thermometers (now less common due to toxicity). 🌡️" },
    { number: 81, symbol: "Tl", name: "Thallium", category: "post-transition-metal", xpos: 13, ypos: 6, desc: "Highly toxic, formerly used in rodenticides. ☠️" },
    { number: 82, symbol: "Pb", name: "Lead", category: "post-transition-metal", xpos: 14, ypos: 6, desc: "Heavy metal, once used in pipes and paints, now mostly in batteries. 🔋" },
    { number: 83, symbol: "Bi", name: "Bismuth", category: "post-transition-metal", xpos: 15, ypos: 6, desc: "Used in cosmetics, alloys, and some medicines (like Pepto-Bismol). 💄" },
    { number: 84, symbol: "Po", name: "Polonium", category: "post-transition-metal", xpos: 16, ypos: 6, desc: "Highly radioactive element discovered by Marie Curie. ☢️" },
    { number: 85, symbol: "At", name: "Astatine", category: "nonmetal", xpos: 17, ypos: 6, desc: "The rarest naturally occurring element, very radioactive. ☢️" },
    { number: 86, symbol: "Rn", name: "Radon", category: "noble-gas", xpos: 18, ypos: 6, desc: "Radioactive gas that can be a health hazard in homes. 🏠" },
    { number: 87, symbol: "Fr", name: "Francium", category: "alkali-metal", xpos: 1, ypos: 7, desc: "Most unstable naturally occurring element, extremely rare. ☢️" },
    { number: 88, symbol: "Ra", name: "Radium", category: "alkaline-earth-metal", xpos: 2, ypos: 7, desc: "Highly radioactive, used by Marie Curie in her research. ☢️" },
    { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", xpos: 3, ypos: 10, desc: "Radioactive element, used as a neutron source. ☢️" },
    { number: 90, symbol: "Th", name: "Thorium", category: "actinide", xpos: 4, ypos: 10, desc: "Radioactive, sometimes considered as an alternative nuclear fuel. ☢️" },
    { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", xpos: 5, ypos: 10, desc: "Highly radioactive and toxic element. ☢️" },
    { number: 92, symbol: "U", name: "Uranium", category: "actinide", xpos: 6, ypos: 10, desc: "Used as nuclear fuel in power plants and weapons. ☢️" },
    { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", xpos: 7, ypos: 10, desc: "First transuranic element, produced artificially. ☢️" },
    { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", xpos: 8, ypos: 10, desc: "Used in nuclear weapons and power. Highly radioactive. ☢️" },
    { number: 95, symbol: "Am", name: "Americium", category: "actinide", xpos: 9, ypos: 10, desc: "Used in smoke detectors! 🔥" },
    { number: 96, symbol: "Cm", name: "Curium", category: "actinide", xpos: 10, ypos: 10, desc: "Named after Marie and Pierre Curie, highly radioactive. ☢️" },
    { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", xpos: 11, ypos: 10, desc: "Named after Berkeley, California. Radioactive. ☢️" },
    { number: 98, symbol: "Cf", name: "Californium", category: "actinide", xpos: 12, ypos: 10, desc: "Named after California, used as a neutron source. ☢️" },
    { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", xpos: 13, ypos: 10, desc: "Named after Albert Einstein. Radioactive. ☢️" },
    { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", xpos: 14, ypos: 10, desc: "Named after Enrico Fermi. Radioactive. ☢️" },
    { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", xpos: 15, ypos: 10, desc: "Named after Dmitri Mendeleev. Radioactive. ☢️" },
    { number: 102, symbol: "No", name: "Nobelium", category: "actinide", xpos: 16, ypos: 10, desc: "Named after Alfred Nobel. Radioactive. ☢️" },
    { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", xpos: 17, ypos: 10, desc: "Named after Ernest Lawrence. Radioactive. ☢️" },
    { number: 104, symbol: "Rf", name: "Rutherfordium", category: "transition-metal", xpos: 4, ypos: 7, desc: "Named after Ernest Rutherford. Synthetic. 🔬" },
    { number: 105, symbol: "Db", name: "Dubnium", category: "transition-metal", xpos: 5, ypos: 7, desc: "Named after Dubna, Russia. Synthetic. 🔬" },
    { number: 106, symbol: "Sg", name: "Seaborgium", category: "transition-metal", xpos: 6, ypos: 7, desc: "Named after Glenn T. Seaborg. Synthetic. 🔬" },
    { number: 107, symbol: "Bh", name: "Bohrium", category: "transition-metal", xpos: 7, ypos: 7, desc: "Named after Niels Bohr. Synthetic. 🔬" },
    { number: 108, symbol: "Hs", name: "Hassium", category: "transition-metal", xpos: 8, ypos: 7, desc: "Named after the German state of Hesse. Synthetic. 🔬" },
    { number: 109, symbol: "Mt", name: "Meitnerium", category: "unknown", xpos: 9, ypos: 7, desc: "Named after Lise Meitner. Synthetic. 🔬" },
    { number: 110, symbol: "Ds", name: "Darmstadtium", category: "unknown", xpos: 10, ypos: 7, desc: "Named after Darmstadt, Germany. Synthetic. 🔬" },
    { number: 111, symbol: "Rg", name: "Roentgenium", category: "unknown", xpos: 11, ypos: 7, desc: "Named after Wilhelm Röntgen. Synthetic. 🔬" },
    { number: 112, symbol: "Cn", name: "Copernicium", category: "transition-metal", xpos: 12, ypos: 7, desc: "Named after Nicolaus Copernicus. Synthetic. 🔬" },
    { number: 113, symbol: "Nh", name: "Nihonium", category: "unknown", xpos: 13, ypos: 7, desc: "Named after Japan (Nihon). Synthetic. 🔬" },
    { number: 114, symbol: "Fl", name: "Flerovium", category: "post-transition-metal", xpos: 14, ypos: 7, desc: "Named after Georgy Flyorov. Synthetic. 🔬" },
    { number: 115, symbol: "Mc", name: "Moscovium", category: "unknown", xpos: 15, ypos: 7, desc: "Named after Moscow. Synthetic. 🔬" },
    { number: 116, symbol: "Lv", name: "Livermorium", category: "unknown", xpos: 16, ypos: 7, desc: "Named after Livermore, California. Synthetic. 🔬" },
    { number: 117, symbol: "Ts", name: "Tennessine", category: "unknown", xpos: 17, ypos: 7, desc: "Named after Tennessee. Synthetic. 🔬" },
    { number: 118, symbol: "Og", name: "Oganesson", category: "noble-gas", xpos: 18, ypos: 7, desc: "Named after Yuri Oganessian. Synthetic. 🔬" }
];


// --- EXISTING FUNCTIONS (UNMODIFIED) ---

// This function now uses the global ELEMENTS array directly.
// The SAMPLE_ELEMENTS is no longer needed since we have all elements.
function getElements() {
  return ELEMENTS.slice(); // Use .slice() to return a copy, good practice.
}

function byId(id) { return document.getElementById(id); }
function colourKey(cat="") { return (cat || "").toLowerCase().replace(/\s+/g, "-"); }

function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart    = e.ypos;
  cell.dataset.cat = colourKey(e.category); // Use colourKey for consistent category names

  const num = (e.num != null ? e.num : e.number);
  const sym = (e.sym || e.symbol || "");
  const name = (e.name || "");

  cell.innerHTML = `
    <div class="num">${num ?? ""}</div>
    <div class="sym">${sym}</div>
    <div class="el-name">${name}</div>
  `;

  cell.title = `${num ?? ""} ${name} (${sym})`.trim();
  cell.setAttribute("aria-label", cell.title);

  if (typeof openPopup === "function") {
    cell.addEventListener("click", () => openPopup(e));
  }

  return cell;
}

function renderGrid() {
  const grid = byId("periodic-table") || byId("grid") || document.body;
  grid.classList.add("pt-grid");

  while (grid.firstChild) grid.removeChild(grid.firstChild);

  const data = getElements();
  data.forEach(e => grid.appendChild(makeCell(e)));
}

function openPopup(elementData) {
  const elementCard = byId("element-card");
  if (!elementCard) {
    console.error("Element card not found!");
    return;
  }

  elementCard.classList.remove("hidden"); // Make card visible
  byId("element-symbol").textContent = elementData.symbol;
  byId("element-name").textContent = elementData.name;
  byId("element-fact").textContent = elementData.desc || "No fact available.";
}

function closeCard() {
  const elementCard = byId("element-card");
  if (elementCard) {
    elementCard.classList.add("hidden"); // Hide card
  }
}

// Attach the closeCard function to the global window object so onclick="closeCard()" works
window.closeCard = closeCard;

// This line makes sure renderGrid runs once the page HTML is fully loaded
window.addEventListener("DOMContentLoaded", renderGrid);
