/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — Kid & Adult Toggle Version (FULL)
   -------------------------------------------------------------------- */

/* ---------- constants ------------------------------------------------- */
const STATE_COLOUR = { solid:"#90be6d", liquid:"#8ecae6", gas:"#ffd93b", unknown:"#adb5bd" };

/* ---------- dataset: KID (118 entries) ------------------------------- */
const ELEMENTS_KID = [
  {sym:"H",  name:"Hydrogen",          row:1, col:1,  state:"gas",   fun:"Rocket fuel helper! 🚀"},
  {sym:"He", name:"Helium",            row:1, col:18, state:"gas",   fun:"Makes balloons float! 🎈"},
  {sym:"Li", name:"Lithium",           row:2, col:1,  state:"solid", fun:"Powers tiny batteries! 🔋"},
  {sym:"Be", name:"Beryllium",         row:2, col:2,  state:"solid", fun:"Builds light spacecraft! 🛸"},
  {sym:"B",  name:"Boron",             row:2, col:13, state:"solid", fun:"Hidden in slime borax! 🧼"},
  {sym:"C",  name:"Carbon",            row:2, col:14, state:"solid", fun:"Both diamonds & pencils! 💎✏️"},
  {sym:"N",  name:"Nitrogen",          row:2, col:15, state:"gas",   fun:"78 % of the air! 🌬️"},
  {sym:"O",  name:"Oxygen",            row:2, col:16, state:"gas",   fun:"We breathe it! ❤️"},
  {sym:"F",  name:"Fluorine",          row:2, col:17, state:"gas",   fun:"Protects teeth enamel! 😁"},
  {sym:"Ne", name:"Neon",              row:2, col:18, state:"gas",   fun:"Glows in neon signs! ✨"},
  {sym:"Na", name:"Sodium",            row:3, col:1,  state:"solid", fun:"Loves to make salt! 🍟"},
  {sym:"Mg", name:"Magnesium",         row:3, col:2,  state:"solid", fun:"Bright firework flashes! 🎆"},
  {sym:"Al", name:"Aluminium",         row:3, col:13, state:"solid", fun:"Cans & airplane wings! ✈️"},
  {sym:"Si", name:"Silicon",           row:3, col:14, state:"solid", fun:"Brains of computers! 💻"},
  {sym:"P",  name:"Phosphorus",        row:3, col:15, state:"solid", fun:"Makes glow sticks glow! 🔦"},
  {sym:"S",  name:"Sulfur",            row:3, col:16, state:"solid", fun:"Smelly volcano gas! 🌋"},
  {sym:"Cl", name:"Chlorine",          row:3, col:17, state:"gas",   fun:"Keeps pools clean! 🏊"},
  {sym:"Ar", name:"Argon",             row:3, col:18, state:"gas",   fun:"Protects light bulbs! 💡"},
  {sym:"K",  name:"Potassium",         row:4, col:1,  state:"solid", fun:"Bananas’ buddy! 🍌"},
  {sym:"Ca", name:"Calcium",           row:4, col:2,  state:"solid", fun:"Builds bones & teeth! 🦴"},
  {sym:"Sc", name:"Scandium",          row:4, col:3,  state:"solid", fun:"Super‑light bike frames! 🚲"},
  {sym:"Ti", name:"Titanium",          row:4, col:4,  state:"solid", fun:"Jet engine strong! ✈️"},
  {sym:"V",  name:"Vanadium",          row:4, col:5,  state:"solid", fun:"Makes tools tougher! 🔧"},
  {sym:"Cr", name:"Chromium",          row:4, col:6,  state:"solid", fun:"Shiny stainless steel! ✨"},
  {sym:"Mn", name:"Manganese",         row:4, col:7,  state:"solid", fun:"Helps batteries last! 🔋"},
  {sym:"Fe", name:"Iron",              row:4, col:8,  state:"solid", fun:"Core of magnets & blood! 🧲"},
  {sym:"Co", name:"Cobalt",            row:4, col:9,  state:"solid", fun:"Paints deep blue glass! 🏺"},
  {sym:"Ni", name:"Nickel",            row:4, col:10, state:"solid", fun:"Part of coins! 🪙"},
  {sym:"Cu", name:"Copper",            row:4, col:11, state:"solid", fun:"Excellent wire for power! ⚡"},
  {sym:"Zn", name:"Zinc",              row:4, col:12, state:"solid", fun:"Stops steel rust! 🛡️"},
  {sym:"Ga", name:"Gallium",           row:4, col:13, state:"solid", fun:"Melts in your hand! 🤲"},
  {sym:"Ge", name:"Germanium",         row:4, col:14, state:"solid", fun:"Used in fibre optics! 🌐"},
  {sym:"As", name:"Arsenic",           row:4, col:15, state:"solid", fun:"Old scary poison! ☠️"},
  {sym:"Se", name:"Selenium",          row:4, col:16, state:"solid", fun:"Helps solar panels! ☀️"},
  {sym:"Br", name:"Bromine",           row:4, col:17, state:"liquid",fun:"Rare dark red liquid! 🧪"},
  {sym:"Kr", name:"Krypton",           row:4, col:18, state:"gas",   fun:"Bright camera flashes! 📸"},
  {sym:"Rb", name:"Rubidium",          row:5, col:1,  state:"solid", fun:"Explodes in water! 💥"},
  {sym:"Sr", name:"Strontium",         row:5, col:2,  state:"solid", fun:"Red firework colour! 🎇"},
  {sym:"Y",  name:"Yttrium",           row:5, col:3,  state:"solid", fun:"Used in old TVs! 📺"},
  {sym:"Zr", name:"Zirconium",         row:5, col:4,  state:"solid", fun:"Nuclear reactor cladding! ⚛️"},
  {sym:"Nb", name:"Niobium",           row:5, col:5,  state:"solid", fun:"Found in MRI magnets! 🧲"},
  {sym:"Mo", name:"Molybdenum",        row:5, col:6,  state:"solid", fun:"Space‑grade bolts! 🚀"},
  {sym:"Tc", name:"Technetium",        row:5, col:7,  state:"solid", fun:"Radioactive hospital tracer! 🏥"},
  {sym:"Ru", name:"Ruthenium",         row:5, col:8,  state:"solid", fun:"Toughens jewellery! 💍"},
  {sym:"Rh", name:"Rhodium",           row:5, col:9,  state:"solid", fun:"Cleans car exhaust! 🚗"},
  {sym:"Pd", name:"Palladium",         row:5, col:10, state:"solid", fun:"Helps fuel‑cell cars! 🚙"},
  {sym:"Ag", name:"Silver",            row:5, col:11, state:"solid", fun:"Best metal conductor! ⚡"},
  {sym:"Cd", name:"Cadmium",           row:5, col:12, state:"solid", fun:"Old yellow pigment! 🖍️"},
  {sym:"In", name:"Indium",            row:5, col:13, state:"solid", fun:"Touchscreen friend! 📱"},
  {sym:"Sn", name:"Tin",               row:5, col:14, state:"solid", fun:"Tin cans protector! 🥫"},
  {sym:"Sb", name:"Antimony",          row:5, col:15, state:"solid", fun:"Fire retardant helper! 🔥"},
  {sym:"Te", name:"Tellurium",         row:5, col:16, state:"solid", fun:"Fast computer chips! 💾"},
  {sym:"I",  name:"Iodine",            row:5, col:17, state:"solid", fun:"Purple disinfectant! 🩹"},
  {sym:"Xe", name:"Xenon",             row:5, col:18, state:"gas",   fun:"Bright movie projector! 🎥"},
  {sym:"Cs", name:"Caesium",           row:6, col:1,  state:"solid", fun:"Atomic clocks tick with me! ⏰"},
  {sym:"Ba", name:"Barium",            row:6, col:2,  state:"solid", fun:"Glow in X‑ray scans! 🩻"},
  {sym:"La", name:"Lanthanum",         row:8, col:4,  state:"solid", fun:"Hybrid car batteries! 🚗"},
  {sym:"Ce", name:"Cerium",            row:8, col:5,  state:"solid", fun:"Self‑cleaning ovens sparkle! ✨"},
  {sym:"Pr", name:"Praseodymium",      row:8, col:6,  state:"solid", fun:"Welder goggles green! 😎"},
  {sym:"Nd", name:"Neodymium",         row:8, col:7,  state:"solid", fun:"Super‑strong magnets! 🧲"},
  {sym:"Pm", name:"Promethium",        row:8, col:8,  state:"solid", fun:"Glows in nuclear batteries! 🔋"},
  {sym:"Sm", name:"Samarium",          row:8, col:9,  state:"solid", fun:"Loud guitar amp magnets! 🎸"},
  {sym:"Eu", name:"Europium",          row:8, col:10, state:"solid", fun:"LED TV red glow! 📺"},
  {sym:"Gd", name:"Gadolinium",        row:8, col:11, state:"solid", fun:"Sharp MRI contrast! 🏥"},
  {sym:"Tb", name:"Terbium",           row:8, col:12, state:"solid", fun:"Green glow sticks! 🟢"},
  {sym:"Dy", name:"Dysprosium",        row:8, col:13, state:"solid", fun:"Heat‑resistant magnets! 🔥"},
  {sym:"Ho", name:"Holmium",           row:8, col:14, state:"solid", fun:"Huge magnetic strength! 💪"},
  {sym:"Er", name:"Erbium",            row:8, col:15, state:"solid", fun:"Fibre‑optics booster! 🌐"},
  {sym:"Tm", name:"Thulium",           row:8, col:16, state:"solid", fun:"Portable X‑ray source! 📸"},
  {sym:"Yb", name:"Ytterbium",         row:8, col:17, state:"solid", fun:"Earthquake research! 🌍"},
  {sym:"Lu", name:"Lutetium",          row:8, col:18, state:"solid", fun:"Cancer scanner crystals! 💎"},
  {sym:"Hf", name:"Hafnium",           row:6, col:4,  state:"solid", fun:"Rocket nozzles shield! 🚀"},
  {sym:"Ta", name:"Tantalum",          row:6, col:5,  state:"solid", fun:"Phone capacitors store charge! 📲"},
  {sym:"W",  name:"Tungsten",          row:6, col:6,  state:"solid", fun:"Cuts other metals! ✂️"},
  {sym:"Re", name:"Rhenium",           row:6, col:7,  state:"solid", fun:"Jet engines roar! ✈️"},
  {sym:"Os", name:"Osmium",            row:6, col:8,  state:"solid", fun:"Heaviest metal! 🏋️"},
  {sym:"Ir", name:"Iridium",           row:6, col:9,  state:"solid", fun:"Meteor‑survival metal! ☄️"},
  {sym:"Pt", name:"Platinum",          row:6, col:10, state:"solid", fun:"Cleans car exhaust! 💍"},
  {sym:"Au", name:"Gold",              row:6, col:11, state:"solid", fun:"Shiny treasure metal! 🏆"},
  {sym:"Hg", name:"Mercury",           row:6, col:12, state:"liquid",fun:"Only liquid metal! 🌡️"},
  {sym:"Tl", name:"Thallium",          row:6, col:13, state:"solid", fun:"Old lens clarity helper! 🔍"},
  {sym:"Pb", name:"Lead",              row:6, col:14, state:"solid", fun:"Blocks X‑rays! 🛡️"},
  {sym:"Bi", name:"Bismuth",           row:6, col:15, state:"solid", fun:"Rainbow crystal maker! 🌈"},
  {sym:"Po", name:"Polonium",          row:6, col:16, state:"solid", fun:"Blue radio‑glow! 💙"},
  {sym:"At", name:"Astatine",          row:6, col:17, state:"solid", fun:"Super rare element! 🕵️"},
  {sym:"Rn", name:"Radon",             row:6, col:18, state:"gas",   fun:"Sneaks into basements! 🏠"},
  {sym:"Fr", name:"Francium",          row:7, col:1,  state:"solid", fun:"Gone in a flash! ⚡"},
  {sym:"Ra", name:"Radium",            row:7, col:2,  state:"solid", fun:"Old glow‑in‑dark clocks! ⏲️"},
  {sym:"Ac", name:"Actinium",          row:9, col:4,  state:"solid", fun:"Blue radioactive glow! 💡"},
  {sym:"Th", name:"Thorium",           row:9, col:5,  state:"solid", fun:"Possible future fuel! ⚛️"},
  {sym:"Pa", name:"Protactinium",      row:9, col:6,  state:"solid", fun:"Lab‑only rarity! 🔬"},
  {sym:"U",  name:"Uranium",           row:9, col:7,  state:"solid", fun:"Nuclear reactor power! 🚢"},
  {sym:"Np", name:"Neptunium",         row:9, col:8,  state:"solid", fun:"Step to Plutonium! 🛰️"},
  {sym:"Pu", name:"Plutonium",         row:9, col:9,  state:"solid", fun:"Powers Mars rovers! 🔥"},
  {sym:"Am", name:"Americium",         row:9, col:10, state:"solid", fun:"Smoke detector helper! 🚨"},
  {sym:"Cm", name:"Curium",            row:9, col:11, state:"solid", fun:"Deep‑space heat source! 🛰️"},
  {sym:"Bk", name:"Berkelium",         row:9, col:12, state:"solid", fun:"Makes new elements! 🧪"},
  {sym:"Cf", name:"Californium",       row:9, col:13, state:"solid", fun:"Strong neutron blaster! 🔍"},
  {sym:"Es", name:"Einsteinium",       row:9, col:14, state:"solid", fun:"Found in H‑bomb debris! 💥"},
  {sym:"Fm", name:"Fermium",           row:9, col:15, state:"solid", fun:"Tiny particles only! 🧮"},
  {sym:"Md", name:"Mendelevium",       row:9, col:16, state:"solid", fun:"Named for table creator! 📜"},
  {sym:"No", name:"Nobelium",          row:9, col:17, state:"solid", fun:"Honours Alfred Nobel! 🏅"},
  {sym:"Lr", name:"Lawrencium",        row:9, col:18, state:"solid", fun:"Made in cyclotrons! 🎢"},
  {sym:"Rf", name:"Rutherfordium",     row:7, col:4,  state:"solid", fun:"Named for particle pioneer! 💥"},
  {sym:"Db", name:"Dubnium",           row:7, col:5,  state:"solid", fun:"Honours Dubna, Russia! 🏫"},
  {sym:"Sg", name:"Seaborgium",        row:7, col:6,  state:"solid", fun:"Named while scientist alive! 🎉"},
  {sym:"Bh", name:"Bohrium",           row:7, col:7,  state:"solid", fun:"Cheers Niels Bohr! ⚛️"},
  {sym:"Hs", name:"Hassium",           row:7, col:8,  state:"solid", fun:"Named after Hessen! 🇩🇪"},
  {sym:"Mt", name:"Meitnerium",        row:7, col:9,  state:"solid", fun:"Honours Lise Meitner! 👩‍🔬"},
  {sym:"Ds", name:"Darmstadtium",      row:7, col:10, state:"solid", fun:"Discovered in Darmstadt! 🏢"},
  {sym:"Rg", name:"Roentgenium",       row:7, col:11, state:"solid", fun:"Named for X‑ray inventor! ☢️"},
  {sym:"Cn", name:"Copernicium",       row:7, col:12, state:"solid", fun:"Cheers Copernicus! 🌞"},
  {sym:"Nh", name:"Nihonium",          row:7, col:13, state:"solid", fun:"First named after Japan! 🇯🇵"},
  {sym:"Fl", name:"Flerovium",         row:7, col:14, state:"solid", fun:"Flerov Lab tribute! 🏛️"},
  {sym:"Mc", name:"Moscovium",         row:7, col:15, state:"solid", fun:"Moscow science salute! 🏙️"},
  {sym:"Lv", name:"Livermorium",       row:7, col:16, state:"solid", fun:"Named for Livermore Lab! 🧪"},
  {sym:"Ts", name:"Tennessine",        row:7, col:17, state:"solid", fun:"Howdy from Tennessee! 🎸"},
  {sym:"Og", name:"Oganesson",         row:7, col:18, state:"solid", fun:"Honours Yuri Oganessian! 🔍"}
];

/* ---------- dataset: ADULT (118 entries) ---------------------------- */
const ELEMENTS_ADULT = [
  // sym, name, num, mass, row, col, state
  {sym:"H",  name:"Hydrogen",          num:1,   mass:1.008,     row:1, col:1,  state:"gas"},
  {sym:"He", name:"Helium",            num:2,   mass:4.0026,    row:1, col:18, state:"gas"},
  {sym:"Li", name:"Lithium",           num:3,   mass:6.94,      row:2, col:1,  state:"solid"},
  {sym:"Be", name:"Beryllium",         num:4,   mass:9.0122,    row:2, col:2,  state:"solid"},
  {sym:"B",  name:"Boron",             num:5,   mass:10.81,     row:2, col:13, state:"solid"},
  {sym:"C",  name:"Carbon",            num:6,   mass:12.011,    row:2, col:14, state:"solid"},
  {sym:"N",  name:"Nitrogen",          num:7,   mass:14.007,    row:2, col:15, state:"gas"},
  {sym:"O",  name:"Oxygen",            num:8,   mass:15.999,    row:2, col:16, state:"gas"},
  {sym:"F",  name:"Fluorine",          num:9,   mass:18.998,    row:2, col:17, state:"gas"},
  {sym:"Ne", name:"Neon",              num:10,  mass:20.180,    row:2, col:18, state:"gas"},
  {sym:"Na", name:"Sodium",            num:11,  mass:22.990,    row:3, col:1,  state:"solid"},
  {sym:"Mg", name:"Magnesium",         num:12,  mass:24.305,    row:3, col:2,  state:"solid"},
  {sym:"Al", name:"Aluminium",         num:13,  mass:26.982,    row:3, col:13, state:"solid"},
  {sym:"Si", name:"Silicon",           num:14,  mass:28.085,    row:3, col:14, state:"solid"},
  {sym:"P",  name:"Phosphorus",        num:15,  mass:30.974,    row:3, col:15, state:"solid"},
  {sym:"S",  name:"Sulfur",            num:16,  mass:32.06,     row:3, col:16, state:"solid"},
  {sym:"Cl", name:"Chlorine",          num:17,  mass:35.45,     row:3, col:17, state:"gas"},
  {sym:"Ar", name:"Argon",             num:18,  mass:39.948,    row:3, col:18, state:"gas"},
  {sym:"K",  name:"Potassium",         num:19,  mass:39.098,    row:4, col:1,  state:"solid"},
  {sym:"Ca", name:"Calcium",           num:20,  mass:40.078,    row:4, col:2,  state:"solid"},
  {sym:"Sc", name:"Scandium",          num:21,  mass:44.956,    row:4, col:3,  state:"solid"},
  {sym:"Ti", name:"Titanium",          num:22,  mass:47.867,    row:4, col:4,  state:"solid"},
  {sym:"V",  name:"Vanadium",          num:23,  mass:50.942,    row:4, col:5,  state:"solid"},
  {sym:"Cr", name:"Chromium",          num:24,  mass:51.996,    row:4, col:6,  state:"solid"},
  {sym:"Mn", name:"Manganese",         num:25,  mass:54.938,    row:4, col:7,  state:"solid"},
  {sym:"Fe", name:"Iron",              num:26,  mass:55.845,    row:4, col:8,  state:"solid"},
  {sym:"Co", name:"Cobalt",            num:27,  mass:58.933,    row:4, col:9,  state:"solid"},
  {sym:"Ni", name:"Nickel",            num:28,  mass:58.693,    row:4, col:10, state:"solid"},
  {sym:"Cu", name:"Copper",            num:29,  mass:63.546,    row:4, col:11, state:"solid"},
  {sym:"Zn", name:"Zinc",              num:30,  mass:65.38,     row:4, col:12, state:"solid"},
  {sym:"Ga", name:"Gallium",           num:31,  mass:69.723,    row:4, col:13, state:"solid"},
  {sym:"Ge", name:"Germanium",         num:32,  mass:72.630,    row:4, col:14, state:"solid"},
  {sym:"As", name:"Arsenic",           num:33,  mass:74.922,    row:4, col:15, state:"solid"},
  {sym:"Se", name:"Selenium",          num:34,  mass:78.971,    row:4, col:16, state:"solid"},
  {sym:"Br", name:"Bromine",           num:35,  mass:79.904,    row:4, col:17, state:"liquid"},
  {sym:"Kr", name:"Krypton",           num:36,  mass:83.798,    row:4, col:18, state:"gas"},
  {sym:"Rb", name:"Rubidium",          num:37,  mass:85.468,    row:5, col:1,  state:"solid"},
  {sym:"Sr", name:"Strontium",         num:38,  mass:87.62,     row:5, col:2,  state:"solid"},
  {sym:"Y",  name:"Yttrium",           num:39,  mass:88.906,    row:5, col:3,  state:"solid"},
  {sym:"Zr", name:"Zirconium",         num:40,  mass:91.224,    row:5, col:4,  state:"solid"},
  {sym:"Nb", name:"Niobium",           num:41,  mass:92.906,    row:5, col:5,  state:"solid"},
  {sym:"Mo", name:"Molybdenum",        num:42,  mass:95.95,     row:5, col:6,  state:"solid"},
  {sym:"Tc", name:"Technetium",        num:43,  mass:98,        row:5, col:7,  state:"solid"},
  {sym:"Ru", name:"Ruthenium",         num:44,  mass:101.07,    row:5, col:8,  state:"solid"},
  {sym:"Rh", name:"Rhodium",           num:45,  mass:102.91,    row:5, col:9,  state:"solid"},
  {sym:"Pd", name:"Palladium",         num:46,  mass:106.42,    row:5, col:10, state:"solid"},
  {sym:"Ag", name:"Silver",            num:47,  mass:107.87,    row:5, col:11, state:"solid"},
  {sym:"Cd", name:"Cadmium",           num:48,  mass:112.41,    row:5, col:12, state:"solid"},
  {sym:"In", name:"Indium",            num:49,  mass:114.82,    row:5, col:13, state:"solid"},
  {sym:"Sn", name:"Tin",               num:50,  mass:118.71,    row:5, col:14, state:"solid"},
  {sym:"Sb", name:"Antimony",          num:51,  mass:121.76,    row:5, col:15, state:"solid"},
  {sym:"Te", name:"Tellurium",         num:52,  mass:127.60,    row:5, col:16, state:"solid"},
  {sym:"I",  name:"Iodine",            num:53,  mass:126.90,    row:5, col:17, state:"solid"},
  {sym:"Xe", name:"Xenon",             num:54,  mass:131.29,    row:5, col:18, state:"gas"},
  {sym:"Cs", name:"Caesium",           num:55,  mass:132.91,    row:6, col:1,  state:"solid"},
  {sym:"Ba", name:"Barium",            num:56,  mass:137.33,    row:6, col:2,  state:"solid"},
  {sym:"La", name:"Lanthanum",         num:57,  mass:138.91,    row:8, col:4,  state:"solid"},
  {sym:"Ce", name:"Cerium",            num:58,  mass:140.12,    row:8, col:5,  state:"solid"},
  {sym:"Pr", name:"Praseodymium",      num:59,  mass:140.91,    row:8, col:6,  state:"solid"},
  {sym:"Nd", name:"Neodymium",         num:60,  mass:144.24,    row:8, col:7,  state:"solid"},
  {sym:"Pm", name:"Promethium",        num:61,  mass:145,       row:8, col:8,  state:"solid"},
  {sym:"Sm", name:"Samarium",          num:62,  mass:150.36,    row:8, col:9,  state:"solid"},
  {sym:"Eu", name:"Europium",          num:63,  mass:151.96,    row:8, col:10, state:"solid"},
  {sym:"Gd", name:"Gadolinium",        num:64,  mass:157.25,    row:8, col:11, state:"solid"},
  {sym:"Tb", name:"Terbium",           num:65,  mass:158.93,    row:8, col:12, state:"solid"},
  {sym:"Dy", name:"Dysprosium",        num:66,  mass:162.50,    row:8, col:13, state:"solid"},
  {sym:"Ho", name:"Holmium",           num:67,  mass:164.93,    row:8, col:14, state:"solid"},
  {sym:"Er", name:"Erbium",            num:68,  mass:167.26,    row:8, col:15, state:"solid"},
  {sym:"Tm", name:"Thulium",           num:69,  mass:168.93,    row:8, col:16, state:"solid"},
  {sym:"Yb", name:"Ytterbium",         num:70,  mass:173.05,    row:8, col:17, state:"solid"},
  {sym:"Lu", name:"Lutetium",          num:71,  mass:174.97,    row:8, col:18, state:"solid"},
  {sym:"Hf", name:"Hafnium",           num:72,  mass:178.49,    row:6, col:4,  state:"solid"},
  {sym:"Ta", name:"Tantalum",          num:73,  mass:180.95,    row:6, col:5,  state:"solid"},
  {sym:"W",  name:"Tungsten",          num:74,  mass:183.84,    row:6, col:6,  state:"solid"},
  {sym:"Re", name:"Rhenium",           num:75,  mass:186.21,    row:6, col:7,  state:"solid"},
  {sym:"Os", name:"Osmium",            num:76,  mass:190.23,    row:6, col:8,  state:"solid"},
  {sym:"Ir", name:"Iridium",           num:77,  mass:192.22,    row:6, col:9,  state:"solid"},
  {sym:"Pt", name:"Platinum",          num:78,  mass:195.08,    row:6, col:10, state:"solid"},
  {sym:"Au", name:"Gold",              num:79,  mass:196.97,    row:6, col:11, state:"solid"},
  {sym:"Hg", name:"Mercury",           num:80,  mass:200.59,    row:6, col:12, state:"liquid"},
  {sym:"Tl", name:"Thallium",          num:81,  mass:204.38,    row:6, col:13, state:"solid"},
  {sym:"Pb", name:"Lead",              num:82,  mass:207.2,     row:6, col:14, state:"solid"},
  {sym:"Bi", name:"Bismuth",           num:83,  mass:208.98,    row:6, col:15, state:"solid"},
  {sym:"Po", name:"Polonium",          num:84,  mass:209,       row:6, col:16, state:"solid"},
  {sym:"At", name:"Astatine",          num:85,  mass:210,       row:6, col:17, state:"solid"},
  {sym:"Rn", name:"Radon",             num:86,  mass:222,       row:6, col:18, state:"gas"},
  {sym:"Fr", name:"Francium",          num:87,  mass:223,       row:7, col:1,  state:"solid"},
  {sym:"Ra", name:"Radium",            num:88,  mass:226,       row:7, col:2,  state:"solid"},
  {sym:"Ac", name:"Actinium",          num:89,  mass:227,       row:9, col:4,  state:"solid"},
  {sym:"Th", name:"Thorium",           num:90,  mass:232.04,    row:9, col:5,  state:"solid"},
  {sym:"Pa", name:"Protactinium",      num:91,  mass:231.04,    row:9, col:6,  state:"solid"},
  {sym:"U",  name:"Uranium",           num:92,  mass:238.03,    row:9, col:7,  state:"solid"},
  {sym:"Np", name:"Neptunium",         num:93,  mass:237,       row:9, col:8,  state:"solid"},
  {sym:"Pu", name:"Plutonium",         num:94,  mass:244,       row:9, col:9,  state:"solid"},
  {sym:"Am", name:"Americium",         num:95,  mass:243,       row:9, col:10, state:"solid"},
  {sym:"Cm", name:"Curium",            num:96,  mass:247,       row:9, col:11, state:"solid"},
  {sym:"Bk", name:"Berkelium",         num:97,  mass:247,       row:9, col:12, state:"solid"},
  {sym:"Cf", name:"Californium",       num:98,  mass:251,       row:9, col:13, state:"solid"},
  {sym:"Es", name:"Einsteinium",       num:99,  mass:252,       row:9, col:14, state:"solid"},
  {sym:"Fm", name:"Fermium",           num:100, mass:257,       row:9, col:15, state:"solid"},
  {sym:"Md", name:"Mendelevium",       num:101, mass:258,       row:9, col:16, state:"solid"},
  {sym:"No", name:"Nobelium",          num:102, mass:259,       row:9, col:17, state:"solid"},
  {sym:"Lr", name:"Lawrencium",        num:103, mass:266,       row:9, col:18, state:"solid"},
  {sym:"Rf", name:"Rutherfordium",     num:104, mass:267,       row:7, col:4,  state:"solid"},
  {sym:"Db", name:"Dubnium",           num:105, mass:268,       row:7, col:5,  state:"solid"},
  {sym:"Sg", name:"Seaborgium",        num:106, mass:269,       row:7, col:6,  state:"solid"},
  {sym:"Bh", name:"Bohrium",           num:107, mass:270,       row:7, col:7,  state:"solid"},
  {sym:"Hs", name:"Hassium",           num:108, mass:269,       row:7, col:8,  state:"solid"},
  {sym:"Mt", name:"Meitnerium",        num:109, mass:278,       row:7, col:9,  state:"solid"},
  {sym:"Ds", name:"Darmstadtium",      num:110, mass:281,       row:7, col:10, state:"solid"},
  {sym:"Rg", name:"Roentgenium",       num:111, mass:282,       row:7, col:11, state:"solid"},
  {sym:"Cn", name:"Copernicium",       num:112, mass:285,       row:7, col:12, state:"solid"},
  {sym:"Nh", name:"Nihonium",          num:113, mass:286,       row:7, col:13, state:"solid"},
  {sym:"Fl", name:"Flerovium",         num:114, mass:289,       row:7, col:14, state:"solid"},
  {sym:"Mc", name:"Moscovium",         num:115, mass:290,       row:7, col:15, state:"solid"},
  {sym:"Lv", name:"Livermorium",       num:116, mass:293,       row:7, col:16, state:"solid"},
  {sym:"Ts", name:"Tennessine",        num:117, mass:294,       row:7, col:17, state:"solid"},
  {sym:"Og", name:"Oganesson",         num:118, mass:294,       row:7, col:18, state:"solid"}
];

/* ---------- globals -------------------------------------------------- */
let mode = "kid";              // current mode
let table, pop, toggleBtn;     // DOM refs, assigned on load

/* ---------- helper: colour by state --------------------------------- */
const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- build / rebuild grid ------------------------------------ */
function renderTable() {
  table.innerHTML = "";
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

/* ---------- popup ---------------------------------------------------- */
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
function hideInfo() { pop.classList.add("hidden"); }

/* ---------- on page load -------------------------------------------- */
window.onload = () => {
  table     = document.getElementById("table");
  pop       = document.getElementById("popup");
  toggleBtn = document.getElementById("toggleMode");

  document.getElementById("close").onclick = hideInfo;
  document.addEventListener("keydown", e => { if (e.key === "Escape") hideInfo(); });

  toggleBtn.onclick = () => {
    mode = (mode === "kid") ? "adult" : "kid";
    toggleBtn.innerText = (mode === "kid") ? "Switch to Adult Mode" : "Switch to Kid Mode";
    renderTable();
  };

  renderTable();
};



