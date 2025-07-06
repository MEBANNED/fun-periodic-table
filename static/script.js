/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table
   • Default view  – “Atomic Specs”  (atomic number + standard mass)
   • Second view   – “Quick Reference” (one-line description)
   • Click a square → modal popup with both views
----------------------------------------------------------------------- */

/* ---------- colour by physical state -------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- complete dataset (1 – 118) ------------------------------ */
/* Row = period (1-7, 8 = lanthanides, 9 = actinides) */
/* Col = group (1-18) */
const ELEMENTS = [
  /* period 1 */
  {sym:"H",  name:"Hydrogen",   num:1,   mass:1.008,   row:1,col:1,  state:"gas",    ref:"Lightest element; fuels stars."},
  {sym:"He", name:"Helium",     num:2,   mass:4.0026,  row:1,col:18, state:"gas",    ref:"Inert cryogenic gas; balloons."},

  /* period 2 */
  {sym:"Li", name:"Lithium",    num:3,   mass:6.94,    row:2,col:1,  state:"solid",  ref:"Rechargeable batteries."},
  {sym:"Be", name:"Beryllium",  num:4,   mass:9.0122,  row:2,col:2,  state:"solid",  ref:"Aerospace structures."},
  {sym:"B",  name:"Boron",      num:5,   mass:10.81,   row:2,col:13, state:"solid",  ref:"Borosilicate glass, detergents."},
  {sym:"C",  name:"Carbon",     num:6,   mass:12.011,  row:2,col:14, state:"solid",  ref:"Backbone of organic life."},
  {sym:"N",  name:"Nitrogen",   num:7,   mass:14.007,  row:2,col:15, state:"gas",    ref:"78 % of air."},
  {sym:"O",  name:"Oxygen",     num:8,   mass:15.999,  row:2,col:16, state:"gas",    ref:"Essential for respiration."},
  {sym:"F",  name:"Fluorine",   num:9,   mass:18.998,  row:2,col:17, state:"gas",    ref:"Most reactive; Teflon."},
  {sym:"Ne", name:"Neon",       num:10,  mass:20.180,  row:2,col:18, state:"gas",    ref:"Neon lighting & lasers."},

  /* period 3 */
  {sym:"Na", name:"Sodium",     num:11,  mass:22.990,  row:3,col:1,  state:"solid",  ref:"Table salt with chlorine."},
  {sym:"Mg", name:"Magnesium",  num:12,  mass:24.305,  row:3,col:2,  state:"solid",  ref:"Light alloys; flares."},
  {sym:"Al", name:"Aluminium",  num:13,  mass:26.982,  row:3,col:13, state:"solid",  ref:"Cans, foil, aircraft."},
  {sym:"Si", name:"Silicon",    num:14,  mass:28.085,  row:3,col:14, state:"solid",  ref:"Core semiconductor."},
  {sym:"P",  name:"Phosphorus", num:15,  mass:30.974,  row:3,col:15, state:"solid",  ref:"DNA, fertilizers."},
  {sym:"S",  name:"Sulfur",     num:16,  mass:32.06,   row:3,col:16, state:"solid",  ref:"Matches, vulcanized rubber."},
  {sym:"Cl", name:"Chlorine",   num:17,  mass:35.45,   row:3,col:17, state:"gas",    ref:"Disinfectant; PVC."},
  {sym:"Ar", name:"Argon",      num:18,  mass:39.948,  row:3,col:18, state:"gas",    ref:"Inert welding gas."},

  /* period 4 */
  {sym:"K",  name:"Potassium",  num:19,  mass:39.098,  row:4,col:1,  state:"solid",  ref:"Essential nutrient."},
  {sym:"Ca", name:"Calcium",    num:20,  mass:40.078,  row:4,col:2,  state:"solid",  ref:"Bones & teeth."},
  {sym:"Sc", name:"Scandium",   num:21,  mass:44.956,  row:4,col:3,  state:"solid",  ref:"Al-Sc aerospace alloys."},
  {sym:"Ti", name:"Titanium",   num:22,  mass:47.867,  row:4,col:4,  state:"solid",  ref:"Strong light metal."},
  {sym:"V",  name:"Vanadium",   num:23,  mass:50.942,  row:4,col:5,  state:"solid",  ref:"Strengthens steel."},
  {sym:"Cr", name:"Chromium",   num:24,  mass:51.996,  row:4,col:6,  state:"solid",  ref:"Stainless-steel corrosion resistance."},
  {sym:"Mn", name:"Manganese",  num:25,  mass:54.938,  row:4,col:7,  state:"solid",  ref:"Steel additive; batteries."},
  {sym:"Fe", name:"Iron",       num:26,  mass:55.845,  row:4,col:8,  state:"solid",  ref:"Most-used metal."},
  {sym:"Co", name:"Cobalt",     num:27,  mass:58.933,  row:4,col:9,  state:"solid",  ref:"Li-ion batteries; blue pigment."},
  {sym:"Ni", name:"Nickel",     num:28,  mass:58.693,  row:4,col:10, state:"solid",  ref:"Coins; stainless steel."},
  {sym:"Cu", name:"Copper",     num:29,  mass:63.546,  row:4,col:11, state:"solid",  ref:"Top electrical conductor."},
  {sym:"Zn", name:"Zinc",       num:30,  mass:65.38,   row:4,col:12, state:"solid",  ref:"Galvanizes steel; brass."},
  {sym:"Ga", name:"Gallium",    num:31,  mass:69.723,  row:4,col:13, state:"solid",  ref:"Melts in hand; LEDs."},
  {sym:"Ge", name:"Germanium",  num:32,  mass:72.63,   row:4,col:14, state:"solid",  ref:"Fiber optics; IR optics."},
  {sym:"As", name:"Arsenic",    num:33,  mass:74.922,  row:4,col:15, state:"solid",  ref:"Poison; semiconductors."},
  {sym:"Se", name:"Selenium",   num:34,  mass:78.971,  row:4,col:16, state:"solid",  ref:"Solar cells; photocells."},
  {sym:"Br", name:"Bromine",    num:35,  mass:79.904,  row:4,col:17, state:"liquid", ref:"Flame retardants."},
  {sym:"Kr", name:"Krypton",    num:36,  mass:83.798,  row:4,col:18, state:"gas",    ref:"High-end lighting."},

  /* period 5 */
  {sym:"Rb", name:"Rubidium",   num:37,  mass:85.468,  row:5,col:1,  state:"solid",  ref:"Research; atomic clocks."},
  {sym:"Sr", name:"Strontium",  num:38,  mass:87.62,   row:5,col:2,  state:"solid",  ref:"Red fireworks; bone scans."},
  {sym:"Y",  name:"Yttrium",    num:39,  mass:88.906,  row:5,col:3,  state:"solid",  ref:"LED phosphors; superconductors."},
  {sym:"Zr", name:"Zirconium",  num:40,  mass:91.224,  row:5,col:4,  state:"solid",  ref:"Nuclear fuel cladding."},
  {sym:"Nb", name:"Niobium",    num:41,  mass:92.906,  row:5,col:5,  state:"solid",  ref:"Superconducting magnets."},
  {sym:"Mo", name:"Molybdenum", num:42,  mass:95.95,   row:5,col:6,  state:"solid",  ref:"High-temperature alloys."},
  {sym:"Tc", name:"Technetium", num:43,  mass:98,      row:5,col:7,  state:"solid",  ref:"Medical radioactive tracer."},
  {sym:"Ru", name:"Ruthenium",  num:44,  mass:101.07, row:5,col:8,  state:"solid",  ref:"Platinum hardener; electronics."},
  {sym:"Rh", name:"Rhodium",    num:45,  mass:102.91, row:5,col:9,  state:"solid",  ref:"Catalytic converters."},
  {sym:"Pd", name:"Palladium",  num:46,  mass:106.42, row:5,col:10, state:"solid",  ref:"Catalysts; hydrogen storage."},
  {sym:"Ag", name:"Silver",     num:47,  mass:107.87, row:5,col:11, state:"solid",  ref:"Best conductor of electricity."},
  {sym:"Cd", name:"Cadmium",    num:48,  mass:112.41, row:5,col:12, state:"solid",  ref:"Rechargeable Ni-Cd batteries."},
  {sym:"In", name:"Indium",     num:49,  mass:114.82, row:5,col:13, state:"solid",  ref:"ITO touchscreens; solder."},
  {sym:"Sn", name:"Tin",        num:50,  mass:118.71, row:5,col:14, state:"solid",  ref:"Tin cans; solder alloys."},
  {sym:"Sb", name:"Antimony",   num:51,  mass:121.76, row:5,col:15, state:"solid",  ref:"Flame retardants; alloys."},
  {sym:"Te", name:"Tellurium",  num:52,  mass:127.60, row:5,col:16, state:"solid",  ref:"Thermoelectric devices."},
  {sym:"I",  name:"Iodine",     num:53,  mass:126.90, row:5,col:17, state:"solid",  ref:"Thyroid medicine; disinfectant."},
  {sym:"Xe", name:"Xenon",      num:54,  mass:131.29, row:5,col:18, state:"gas",    ref:"Flash lamps; ion propulsion."},

  /* period 6 */
  {sym:"Cs", name:"Cesium",     num:55,  mass:132.91, row:6,col:1,  state:"solid",  ref:"Atomic clocks; photoelectric cells."},
  {sym:"Ba", name:"Barium",     num:56,  mass:137.33, row:6,col:2,  state:"solid",  ref:"Barium contrast in X-ray imaging."},

  /* lanthanides (period 8, group 3) */
  {sym:"La", name:"Lanthanum",  num:57,  mass:138.91, row:8,col:4,  state:"solid",  ref:"Camera lenses; nickel-metal hydride batteries."},
  {sym:"Ce", name:"Cerium",     num:58,  mass:140.12, row:8,col:5,  state:"solid",  ref:"Self-cleaning oven coating."},
  {sym:"Pr", name:"Praseodymium",num:59, mass:140.91, row:8,col:6,  state:"solid",  ref:"Green glass coloring; magnets."},
  {sym:"Nd", name:"Neodymium",  num:60,  mass:144.24, row:8,col:7,  state:"solid",  ref:"Powerful permanent magnets."},
  {sym:"Pm", name:"Promethium", num:61,  mass:145,    row:8,col:8,  state:"solid",  ref:"Radio-luminescent paint."},
  {sym:"Sm", name:"Samarium",   num:62,  mass:150.36, row:8,col:9,  state:"solid",  ref:"Samarium-cobalt magnets."},
  {sym:"Eu", name:"Europium",   num:63,  mass:151.96, row:8,col:10, state:"solid",  ref:"Red phosphors in LEDs."},
  {sym:"Gd", name:"Gadolinium", num:64,  mass:157.25, row:8,col:11, state:"solid",  ref:"MRI contrast agent."},
  {sym:"Tb", name:"Terbium",    num:65,  mass:158.93, row:8,col:12, state:"solid",  ref:"Green phosphors."},
  {sym:"Dy", name:"Dysprosium", num:66,  mass:162.50, row:8,col:13, state:"solid",  ref:"High-temp magnets."},
  {sym:"Ho", name:"Holmium",    num:67,  mass:164.93, row:8,col:14, state:"solid",  ref:"Highest magnetic moment."},
  {sym:"Er", name:"Erbium",     num:68,  mass:167.26, row:8,col:15, state:"solid",  ref:"Fiber-optic signal amplifiers."},
  {sym:"Tm", name:"Thulium",    num:69,  mass:168.93, row:8,col:16, state:"solid",  ref:"Portable X-ray sources."},
  {sym:"Yb", name:"Ytterbium",  num:70,  mass:173.05, row:8,col:17, state:"solid",  ref:"Acoustical glass; lasers."},
  {sym:"Lu", name:"Lutetium",   num:71,  mass:174.97, row:8,col:18, state:"solid",  ref:"PET scan detectors."},

  /* period 6 continued */
  {sym:"Hf", name:"Hafnium",    num:72,  mass:178.49, row:6,col:4,  state:"solid",  ref:"Rocket nozzles; control rods."},
  {sym:"Ta", name:"Tantalum",   num:73,  mass:180.95, row:6,col:5,  state:"solid",  ref:"Phone capacitors; surgical implants."},
  {sym:"W",  name:"Tungsten",   num:74,  mass:183.84, row:6,col:6,  state:"solid",  ref:"Highest melting metal; lamp filaments."},
  {sym:"Re", name:"Rhenium",    num:75,  mass:186.21, row:6,col:7,  state:"solid",  ref:"Jet engine alloys."},
  {sym:"Os", name:"Osmium",     num:76,  mass:190.23, row:6,col:8,  state:"solid",  ref:"Densest metal; pen tips."},
  {sym:"Ir", name:"Iridium",    num:77,  mass:192.22, row:6,col:9,  state:"solid",  ref:"Spark plugs; deep-sea cables."},
  {sym:"Pt", name:"Platinum",   num:78,  mass:195.08, row:6,col:10, state:"solid",  ref:"Catalytic converters; jewelry."},
  {sym:"Au", name:"Gold",       num:79,  mass:196.97, row:6,col:11, state:"solid",  ref:"Electronics; monetary metal."},
  {sym:"Hg", name:"Mercury",    num:80,  mass:200.59, row:6,col:12, state:"liquid", ref:"Thermometers; fluorescents."},
  {sym:"Tl", name:"Thallium",   num:81,  mass:204.38, row:6,col:13, state:"solid",  ref:"Photoelectric cells; poison."},
  {sym:"Pb", name:"Lead",       num:82,  mass:207.2,  row:6,col:14, state:"solid",  ref:"X-ray shielding; batteries."},
  {sym:"Bi", name:"Bismuth",    num:83,  mass:208.98, row:6,col:15, state:"solid",  ref:"Pepto-Bismol; low-toxicity alloy."},
  {sym:"Po", name:"Polonium",   num:84,  mass:209,    row:6,col:16, state:"solid",  ref:"Radioactive heat source."},
  {sym:"At", name:"Astatine",   num:85,  mass:210,    row:6,col:17, state:"solid",  ref:"Rare radioactive halogen."},
  {sym:"Rn", name:"Radon",      num:86,  mass:222,    row:6,col:18, state:"gas",    ref:"Radioactive noble gas."},

  /* period 7 */
  {sym:"Fr", name:"Francium",   num:87,  mass:223,    row:7,col:1,  state:"solid",  ref:"Highly unstable alkali metal."},
  {sym:"Ra", name:"Radium",     num:88,  mass:226,    row:7,col:2,  state:"solid",  ref:"Historic luminous paint; cancer therapy."},

  /* actinides (period 9, group 3) */
  {sym:"Ac", name:"Actinium",   num:89,  mass:227,    row:9,col:4,  state:"solid",  ref:"Radiation source for research."},
  {sym:"Th", name:"Thorium",    num:90,  mass:232.04, row:9,col:5,  state:"solid",  ref:"Potential nuclear fuel."},
  {sym:"Pa", name:"Protactinium",num:91, mass:231.04, row:9,col:6,  state:"solid",  ref:"Rare; nuclear research."},
  {sym:"U",  name:"Uranium",    num:92,  mass:238.03, row:9,col:7,  state:"solid",  ref:"Nuclear fuel & weapons."},
  {sym:"Np", name:"Neptunium",  num:93,  mass:237,    row:9,col:8,  state:"solid",  ref:"Intermediate in Pu production."},
  {sym:"Pu", name:"Plutonium",  num:94,  mass:244,    row:9,col:9,  state:"solid",  ref:"Spacecraft RTGs; weapons."},
  {sym:"Am", name:"Americium",  num:95,  mass:243,    row:9,col:10, state:"solid",  ref:"Smoke detectors."},
  {sym:"Cm", name:"Curium",     num:96,  mass:247,    row:9,col:11, state:"solid",  ref:"Alpha source for Rovers."},
  {sym:"Bk", name:"Berkelium",  num:97,  mass:247,    row:9,col:12, state:"solid",  ref:"Target for new-element synthesis."},
  {sym:"Cf", name:"Californium",num:98,  mass:251,    row:9,col:13, state:"solid",  ref:"Neutron source; well logging."},
  {sym:"Es", name:"Einsteinium",num:99,  mass:252,    row:9,col:14, state:"solid",  ref:"Discovered in H-bomb debris."},
  {sym:"Fm", name:"Fermium",    num:100, mass:257,    row:9,col:15, state:"solid",  ref:"Synthetic; nuclear research."},
  {sym:"Md", name:"Mendelevium",num:101, mass:258,    row:9,col:16, state:"solid",  ref:"Named for Dmitri Mendeleev."},
  {sym:"No", name:"Nobelium",   num:102, mass:259,    row:9,col:17, state:"solid",  ref:"Named for Alfred Nobel."},
  {sym:"Lr", name:"Lawrencium", num:103, mass:266,    row:9,col:18, state:"solid",  ref:"Last actinide; cyclotron product."},

  /* period 7 continued */
  {sym:"Rf", name:"Rutherfordium",num:104,mass:267,  row:7,col:4,  state:"solid",  ref:"Named for Ernest Rutherford."},
  {sym:"Db", name:"Dubnium",    num:105, mass:268,    row:7,col:5,  state:"solid",  ref:"Named for Dubna, Russia."},
  {sym:"Sg", name:"Seaborgium", num:106, mass:269,    row:7,col:6,  state:"solid",  ref:"Named while Seaborg was alive."},
  {sym:"Bh", name:"Bohrium",    num:107, mass:270,    row:7,col:7,  state:"solid",  ref:"Honors Niels Bohr."},
  {sym:"Hs", name:"Hassium",    num:108, mass:269,    row:7,col:8,  state:"solid",  ref:"Named for Hessen, Germany."},
  {sym:"Mt", name:"Meitnerium", num:109, mass:278,    row:7,col:9,  state:"solid",  ref:"Honors physicist Lise Meitner."},
  {sym:"Ds", name:"Darmstadtium",num:110,mass:281,    row:7,col:10, state:"solid",  ref:"Discovered in Darmstadt, Germany."},
  {sym:"Rg", name:"Roentgenium",num:111, mass:282,    row:7,col:11, state:"solid",  ref:"Named for X-ray pioneer Röntgen."},
  {sym:"Cn", name:"Copernicium",num:112, mass:285,    row:7,col:12, state:"solid",  ref:"Honors Nicolaus Copernicus."},
  {sym:"Nh", name:"Nihonium",   num:113, mass:286,    row:7,col:13, state:"solid",  ref:"First element named for Japan."},
  {sym:"Fl", name:"Flerovium",  num:114, mass:289,    row:7,col:14, state:"solid",  ref:"Named for Flerov Laboratory."},
  {sym:"Mc", name:"Moscovium",  num:115, mass:290,    row:7,col:15, state:"solid",  ref:"Honors Moscow Oblast."},
  {sym:"Lv", name:"Livermorium",num:116, mass:293,    row:7,col:16, state:"solid",  ref:"Named for Lawrence Livermore Lab."},
  {sym:"Ts", name:"Tennessine", num:117, mass:294,    row:7,col:17, state:"solid",  ref:"Named for Tennessee."},
  {sym:"Og", name:"Oganesson",  num:118, mass:294,    row:7,col:18, state:"solid",  ref:"Named for Yuri Oganessian."}
];

/* ---------- globals & helpers --------------------------------------- */
let view = "specs";                                      // "specs" | "reference"
const colour = s => STATE_COLOUR[s] || STATE_COLOUR.unknown;

let grid, popup, symEl, nameEl, factEl, specsBtn, refBtn;

/* ---------- build grid ---------------------------------------------- */
function buildGrid() {
  grid.innerHTML = "";
  ELEMENTS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = "element";
    cell.textContent = el.sym;
    cell.style.background = colour(el.state);
    cell.style.gridColumn = el.col;
    cell.style.gridRow = el.row;
    cell.onclick = () => openPopup(el.sym);
    grid.appendChild(cell);
  });
}

/* ---------- popup logic --------------------------------------------- */
function render(sym) {
  const el = ELEMENTS.find(e => e.sym === sym);
  if (!el) return;
  symEl.textContent = el.sym;
  if (view === "specs") {
    nameEl.textContent = `${el.name} (No. ${el.num})`;
    factEl.textContent = `Standard Atomic Mass: ${el.mass}`;
    specsBtn.classList.add("active");
    refBtn.classList.remove("active");
  } else {
    nameEl.textContent = el.name;
    factEl.textContent = el.ref;
    refBtn.classList.add("active");
    specsBtn.classList.remove("active");
  }
}

function openPopup(sym) {
  render(sym);
  popup.style.display = "flex";
  specsBtn.onclick = () => { view = "specs";      render(sym); };
  refBtn.onclick   = () => { view = "reference";  render(sym); };
}
function closePopup() { popup.style.display = "none"; }

/* ---------- init after DOM ready ------------------------------------ */
window.addEventListener("DOMContentLoaded", () => {
  grid    = document.getElementById("periodic-table");
  popup   = document.getElementById("info-popup");
  symEl   = document.getElementById("element-name");
  nameEl  = document.getElementById("element-name");
  factEl  = document.getElementById("element-fact");
  specsBtn= document.getElementById("specsBtn");
  refBtn  = document.getElementById("refBtn");

  document.getElementById("close-popup").onclick = closePopup;
  buildGrid();
});
