/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table – kid-friendly facts for ALL 118 elements
   Each entry: [symbol, name, row, col, state, funFact]
   Row = period (1-7, 8 = lanthanides, 9 = actinides)
   Col = group (1-18)
------------------------------------------------------------------------ */

const STATE_COLOUR = {
  solid:   "#90be6d",   // lime
  liquid:  "#8ecae6",   // aqua
  gas:     "#ffd93b",   // sunshine
  unknown: "#adb5bd"
};

/* ---------- full element list ---------------------------------------- */
const ELEMENTS = [
/* 1 */ ["H","Hydrogen",1,1,"gas","I help rockets blast into space! 🚀"],
        ["He","Helium",1,18,"gas","I make balloons float super high! 🎈"],
/* 2 */ ["Li","Lithium",2,1,"solid","Phone batteries gobble me up for power! 🔋"],
        ["Be","Beryllium",2,2,"solid","I make spaceships light but strong! 🛸"],
        ["B","Boron",2,13,"solid","I hide in slime-making borax! 🧼"],
        ["C","Carbon",2,14,"solid","Diamonds and pencils are both me! 💎✏️"],
        ["N","Nitrogen",2,15,"gas","Most of the air is actually me! 🌬️"],
        ["O","Oxygen",2,16,"gas","You breathe me every single moment! ❤️"],
        ["F","Fluorine",2,17,"gas","I keep your teeth tough in toothpaste! 😁"],
        ["Ne","Neon",2,18,"gas","I light up neon signs in bright colours! ✨"],
/* 3 */ ["Na","Sodium",3,1,"solid","I join Cl to make salty fries! 🍟"],
        ["Mg","Magnesium",3,2,"solid","Fireworks flash white because of me! 🎆"],
        ["Al","Aluminium",3,13,"solid","Soda cans and airplanes use me! ✈️"],
        ["Si","Silicon",3,14,"solid","Computer chips are my playground! 💻"],
        ["P","Phosphorus",3,15,"solid","Glow sticks glow thanks to me! 🔦"],
        ["S","Sulfur",3,16,"solid","I make stinky volcano smells! 🌋"],
        ["Cl","Chlorine",3,17,"gas","I keep swimming pools clean and clear! 🏊"],
        ["Ar","Argon",3,18,"gas","I protect light-bulb filaments from popping! 💡"],
/* 4 */ ["K","Potassium",4,1,"solid","Bananas pack me for muscle power! 🍌"],
        ["Ca","Calcium",4,2,"solid","I build strong bones and teeth! 🦴"],
        ["Sc","Scandium",4,3,"solid","I boost bike frames to be ultra-light! 🚲"],
        ["Ti","Titanium",4,4,"solid","Jet engines love my strength! ✈️"],
        ["V","Vanadium",4,5,"solid","I harden tools so they never snap! 🔧"],
        ["Cr","Chromium",4,6,"solid","I give stainless steel its shiny armour! ✨"],
        ["Mn","Manganese",4,7,"solid","Batteries need me to stay charged! 🔋"],
        ["Fe","Iron",4,8,"solid","Magnets and your blood team up with me! 🧲"],
        ["Co","Cobalt",4,9,"solid","I colour glass a dreamy blue! 🏺"],
        ["Ni","Nickel",4,10,"solid","Nickel coins are partly me! 🪙"],
        ["Cu","Copper",4,11,"solid","I carry electricity like lightning! ⚡"],
        ["Zn","Zinc",4,12,"solid","I stop steel from getting rusty! 🛡️"],
        ["Ga","Gallium",4,13,"solid","I melt in your hand like magic metal! 🫲"],
        ["Ge","Germanium",4,14,"solid","Fibre-optic cables whisper through me! 📡"],
        ["As","Arsenic",4,15,"solid","Pirates feared my poison! ☠️"],
        ["Se","Selenium",4,16,"solid","Solar panels soak up sunshine with me! ☀️"],
        ["Br","Bromine",4,17,"liquid","I’m a rare reddish liquid element! 🧪"],
        ["Kr","Krypton",4,18,"gas","Camera flashes love my bright burst! 📸"],
/* 5 */ ["Rb","Rubidium",5,1,"solid","Drop me in water and I dance wildly! 💥"],
        ["Sr","Strontium",5,2,"solid","Fireworks turn red with my sparks! 🎇"],
        ["Y","Yttrium",5,3,"solid","Old TVs needed me for red pictures! 📺"],
        ["Zr","Zirconium",5,4,"solid","Nuclear reactors trust my armour! ⚛️"],
        ["Nb","Niobium",5,5,"solid","MRI magnets keep cool with me! 🧲"],
        ["Mo","Molybdenum",5,6,"solid","Spacecraft bolts stay strong with me! 🚀"],
        ["Tc","Technetium",5,7,"solid","Doctors track body scans using me! 🩻"],
        ["Ru","Ruthenium",5,8,"solid","Super-tough jewellery mixes me in! 💍"],
        ["Rh","Rhodium",5,9,"solid","Car exhausts get cleaned by me! 🚗"],
        ["Pd","Palladium",5,10,"solid","I help hydrogen cars zoom! 🚙"],
        ["Ag","Silver",5,11,"solid","Fastest conductor for electricity! ⚡"],
        ["Cd","Cadmium",5,12,"solid","Old yellow crayons got colour from me! 🖍️"],
        ["In","Indium",5,13,"solid","Touchscreens listen through my clear coat! 📱"],
        ["Sn","Tin",5,14,"solid","Tin cans shout “Thanks for the coat!” 🥫"],
        ["Sb","Antimony",5,15,"solid","Fire-proof clothes sprinkle me in! 🔥"],
        ["Te","Tellurium",5,16,"solid","I help computers store data fast! 💾"],
        ["I","Iodine",5,17,"solid","I make boo-boo medicine purple! 🩹"],
        ["Xe","Xenon",5,18,"gas","I power super-bright movie projectors! 🎥"],
/* 6 main row */
        ["Cs","Caesium",6,1,"solid","Atomic clocks tick perfectly with me! ⏰"],
        ["Ba","Barium",6,2,"solid","Doctors take glowing X-rays with me! 🩻"],
/* 6 lanthanides (row 8) */
        ["La","Lanthanum",8,4,"solid","Hybrid-car batteries gulp me down! 🚗"],
        ["Ce","Cerium",8,5,"solid","Self-cleaning ovens sparkle with me! ✨"],
        ["Pr","Praseodymium",8,6,"solid","Welder goggles block glare with me! 😎"],
        ["Nd","Neodymium",8,7,"solid","I make super-strong tiny magnets! 🧲"],
        ["Pm","Promethium",8,8,"solid","I glow inside tiny nuclear batteries! 🔋"],
        ["Sm","Samarium",8,9,"solid","Guitar amps love my heat-proof magnets! 🎸"],
        ["Eu","Europium",8,10,"solid","Red & blue LEDs shine with me! 📺"],
        ["Gd","Gadolinium",8,11,"solid","MRI machines see clearer with me! 🏥"],
        ["Tb","Terbium",8,12,"solid","Green glow sticks sparkle with me! 🟢"],
        ["Dy","Dysprosium",8,13,"solid","Magnets stay strong even in heat with me! 🔥"],
        ["Ho","Holmium",8,14,"solid","I hold the record for biggest magnet power! 💪"],
        ["Er","Erbium",8,15,"solid","Fibre-optic internet zooms through me! 🌐"],
        ["Tm","Thulium",8,16,"solid","Portable X-rays depend on me! 📸"],
        ["Yb","Ytterbium",8,17,"solid","Earthquake tests squeeze me super hard! 🌍"],
        ["Lu","Lutetium",8,18,"solid","Cancer scanners light up crystals of me! 💎"],
/* continue period 6 main row */
        ["Hf","Hafnium",6,4,"solid","Rocket nozzles battle heat with me! 🚀"],
        ["Ta","Tantalum",6,5,"solid","Tiny phone capacitors stash charge in me! 📲"],
        ["W","Tungsten",6,6,"solid","I’m so tough I cut other metals! ✂️"],
        ["Re","Rhenium",6,7,"solid","Jet engines roar thanks to me! ✈️"],
        ["Os","Osmium",6,8,"solid","Densest metal – super heavy! 🏋️"],
        ["Ir","Iridium",6,9,"solid","I survive meteor blasts in rocks! ☄️"],
        ["Pt","Platinum",6,10,"solid","I clean car fumes & make fancy rings! 💍"],
        ["Au","Gold",6,11,"solid","Shiny treasure that never rusts! 🏆"],
        ["Hg","Mercury",6,12,"liquid","Metal that’s liquid and shiny! 🌡️"],
        ["Tl","Thallium",6,13,"solid","Old spyglasses used me for clarity! 🔍"],
        ["Pb","Lead",6,14,"solid","I block X-rays to keep you safe! 🛡️"],
        ["Bi","Bismuth",6,15,"solid","I grow rainbow crystals like magic! 🌈"],
        ["Po","Polonium",6,16,"solid","I glow blue from radio-power! 💙"],
        ["At","Astatine",6,17,"solid","So rare we can barely find me! 🕵️"],
        ["Rn","Radon",6,18,"gas","I sneak into basements as gas! 🏠"],
/* 7 main row */
        ["Fr","Francium",7,1,"solid","I’m super unstable – gone in a flash! ⚡"],
        ["Ra","Radium",7,2,"solid","Old clocks glowed because of me! ⏲️"],
/* 7 actinides (row 9) */
        ["Ac","Actinium",9,4,"solid","I shine bright blue from radiation! 💡"],
        ["Th","Thorium",9,5,"solid","Future nuclear fuel might be me! ⚛️"],
        ["Pa","Protactinium",9,6,"solid","So rare, only labs meet me! 🔬"],
        ["U","Uranium",9,7,"solid","Nuclear reactors use my power! 🚢"],
        ["Np","Neptunium",9,8,"solid","I’m a stepping stone to make Plutonium! 🛰️"],
        ["Pu","Plutonium",9,9,"solid","Mars rovers stay warm with my heat! 🔥"],
        ["Am","Americium",9,10,"solid","Smoke detectors sniff thanks to me! 🚨"],
        ["Cm","Curium",9,11,"solid","Deep-space probes stay powered by me! 🛰️"],
        ["Bk","Berkelium",9,12,"solid","Scientists create new elements with me! 🧪"],
        ["Cf","Californium",9,13,"solid","I blast neutrons for lab detective work! 🔍"],
        ["Es","Einsteinium",9,14,"solid","Discovered in H-bomb debris! 💥"],
        ["Fm","Fermium",9,15,"solid","Only microscopes and math can spot me! 🧮"],
        ["Md","Mendelevium",9,16,"solid","Named after the periodic-table wizard! 📜"],
        ["No","Nobelium",9,17,"solid","Named for the Nobel Prize hero! 🏅"],
        ["Lr","Lawrencium",9,18,"solid","Cyclotrons spin me into being! 🎢"],
/* finish period 7 main row */
        ["Rf","Rutherfordium",7,4,"solid","Named for the atom-smash pioneer! 💥"],
        ["Db","Dubnium",7,5,"solid","I honour a Russian science town! 🏫"],
        ["Sg","Seaborgium",7,6,"solid","Named while the scientist was alive! 🎉"],
        ["Bh","Bohrium",7,7,"solid","Honours Niels Bohr, atom master! ⚛️"],
        ["Hs","Hassium",7,8,"solid","Named after Hessen, Germany! 🇩🇪"],
        ["Mt","Meitnerium",7,9,"solid","Cheers to Lise Meitner, physics pioneer! 👩‍🔬"],
        ["Ds","Darmstadtium",7,10,"solid","Discovered in Darmstadt, Germany! 🏢"],
        ["Rg","Roentgenium",7,11,"solid","Named for the X-ray inventor! ☢️"],
        ["Cn","Copernicium",7,12,"solid","Honours Copernicus’s heliocentric idea! 🌞"],
        ["Nh","Nihonium",7,13,"solid","First element named after Japan! 🇯🇵"],
        ["Fl","Flerovium",7,14,"solid","Named for the Flerov Laboratory! 🏛️"],
        ["Mc","Moscovium",7,15,"solid","Cheers to Moscow science! 🏙️"],
        ["Lv","Livermorium",7,16,"solid","Salutes Lawrence Livermore Lab! 🧪"],
        ["Ts","Tennessine",7,17,"solid","Yee-haw! I’m named for Tennessee! 🎸"],
        ["Og","Oganesson",7,18,"solid","Named for Yuri Oganessian, element hunter! 🔍"]
];

/* ---------- helper: pick colour by state ------------------------------ */
const colour = st => STATE_COLOUR[st] || STATE_COLOUR.unknown;

/* ---------- build the grid ------------------------------------------- */
const table = document.getElementById("table");

ELEMENTS.forEach(([sym, name, row, col, state, fun]) => {
  const card = document.createElement("div");
  card.className = "element";
  card.textContent = sym;
  card.style.background      = colour(state);
  card.style.gridColumnStart = col;
  card.style.gridRowStart    = row;
  card.onclick = () => showInfo(sym, name, fun);
  table.appendChild(card);
});

/* ---------- pop-up logic --------------------------------------------- */
const pop = document.getElementById("popup");

function showInfo(sym, name, fun) {
  /* playful wiggle */
  const card = [...table.children].find(el => el.textContent === sym);
  card.animate(
    [{transform:"rotate(0deg)"},
     {transform:"rotate(8deg)"},
     {transform:"rotate(-8deg)"},
     {transform:"rotate(0deg)"}],
    {duration:450}
  );

  document.getElementById("symbol").innerText  = sym;
  document.getElementById("name").innerText    = name;
  document.getElementById("funfact").innerText = fun;
  pop.classList.remove("hidden");
}

function hideInfo() { pop.classList.add("hidden"); }

document.getElementById("close").onclick = hideInfo;
document.addEventListener("keydown", e => { if (e.key === "Escape") hideInfo(); });
