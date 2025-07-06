/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — “Atomic Specs” & “Quick Reference” views
   Default view  = Atomic Specs  (atomic number + standard atomic mass)
   Second view   = Quick Reference (plain‑language description)
   All 118 elements included
   -------------------------------------------------------------------- */

/* ---------- colour map by physical state ----------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- complete dataset: ELEMENTS (118) ------------------------- */
const ELEMENTS = [
  /* 1 */  {sym:"H",  name:"Hydrogen",          num:1,   mass:1.008,    state:"gas",    row:1, col:1,  ref:"Lightest element; fuels stars."},
           {sym:"He", name:"Helium",            num:2,   mass:4.0026,   state:"gas",    row:1, col:18, ref:"Inert gas for cryogenics & balloons."},
  /* 2 */  {sym:"Li", name:"Lithium",           num:3,   mass:6.94,     state:"solid",  row:2, col:1,  ref:"Soft metal in rechargeable batteries."},
           {sym:"Be", name:"Beryllium",         num:4,   mass:9.0122,   state:"solid",  row:2, col:2,  ref:"Light metal for aerospace parts."},
           {sym:"B",  name:"Boron",             num:5,   mass:10.81,    state:"solid",  row:2, col:13, ref:"Used in glass & borax detergents."},
           {sym:"C",  name:"Carbon",            num:6,   mass:12.011,   state:"solid",  row:2, col:14, ref:"Basis of organic life; diamond/graphite."},
           {sym:"N",  name:"Nitrogen",          num:7,   mass:14.007,   state:"gas",    row:2, col:15, ref:"78 % of Earth’s atmosphere."},
           {sym:"O",  name:"Oxygen",            num:8,   mass:15.999,   state:"gas",    row:2, col:16, ref:"Essential for respiration & combustion."},
           {sym:"F",  name:"Fluorine",          num:9,   mass:18.998,   state:"gas",    row:2, col:17, ref:"Highly reactive; in Teflon & toothpaste."},
           {sym:"Ne", name:"Neon",              num:10,  mass:20.180,   state:"gas",    row:2, col:18, ref:"Bright orange‑red in neon lights."},
  /* 3 */  {sym:"Na", name:"Sodium",            num:11,  mass:22.990,   state:"solid",  row:3, col:1,  ref:"Forms table salt (NaCl) with chlorine."},
           {sym:"Mg", name:"Magnesium",         num:12,  mass:24.305,   state:"solid",  row:3, col:2,  ref:"Burns bright white; light alloys."},
           {sym:"Al", name:"Aluminium",         num:13,  mass:26.982,   state:"solid",  row:3, col:13, ref:"Light metal for cans and aircraft."},
           {sym:"Si", name:"Silicon",           num:14,  mass:28.085,   state:"solid",  row:3, col:14, ref:"Semiconductor in all computer chips."},
           {sym:"P",  name:"Phosphorus",        num:15,  mass:30.974,   state:"solid",  row:3, col:15, ref:"Vital for DNA & fertilizers; glows."},
           {sym:"S",  name:"Sulfur",            num:16,  mass:32.06,    state:"solid",  row:3, col:16, ref:"Yellow mineral; smells like rotten eggs."},
           {sym:"Cl", name:"Chlorine",          num:17,  mass:35.45,    state:"gas",    row:3, col:17, ref:"Disinfects water; part of table salt."},
           {sym:"Ar", name:"Argon",             num:18,  mass:39.948,   state:"gas",    row:3, col:18, ref:"Inert gas used in welding & bulbs."},
  /* 4 */  {sym:"K",  name:"Potassium",         num:19,  mass:39.098,   state:"solid",  row:4, col:1,  ref:"Essential nutrient; bursts in water."},
           {sym:"Ca", name:"Calcium",           num:20,  mass:40.078,   state:"solid",  row:4, col:2,  ref:"Builds bones and teeth."},
           {sym:"Sc", name:"Scandium",          num:21,  mass:44.956,   state:"solid",  row:4, col:3,  ref:"Strengthens aluminum alloys."},
           {sym:"Ti", name:"Titanium",          num:22,  mass:47.867,   state:"solid",  row:4, col:4,  ref:"Strong light metal; implants & jets."},
           {sym:"V",  name:"Vanadium",          num:23,  mass:50.942,   state:"solid",  row:4, col:5,  ref:"Added to steel for toughness."},
           {sym:"Cr", name:"Chromium",          num:24,  mass:51.996,   state:"solid",  row:4, col:6,  ref:"Gives stainless steel corrosion resistance."},
           {sym:"Mn", name:"Manganese",         num:25,  mass:54.938,   state:"solid",  row:4, col:7,  ref:"Steel additive; battery component."},
           {sym:"Fe", name:"Iron",              num:26,  mass:55.845,   state:"solid",  row:4, col:8,  ref:"Most‑used metal; core of Earth."},
           {sym:"Co", name:"Cobalt",            num:27,  mass:58.933,   state:"solid",  row:4, col:9,  ref:"Used in super‑alloys and blue pigments."},
           {sym:"Ni", name:"Nickel",            num:28,  mass:58.693,   state:"solid",  row:4, col:10, ref:"Coins, stainless steel, batteries."},
           {sym:"Cu", name:"Copper",            num:29,  mass:63.546,   state:"solid",  row:4, col:11, ref:"Excellent electrical conductor."},
           {sym:"Zn", name:"Zinc",              num:30,  mass:65.38,    state:"solid",  row:4, col:12, ref:"Galvanizes steel; trace nutrient."},
           {sym:"Ga", name:"Gallium",           num:31,  mass:69.723,   state:"solid",  row:4, col:13, ref:"Melts in hand; used in LEDs & semiconductors."},
           {sym:"Ge", name:"Germanium",         num:32,  mass:72.630,   state:"solid",  row:4, col:14, ref:"Semiconductor and fiber optics."},
           {sym:"As", name:"Arsenic",           num:33,  mass:74.922,   state:"solid",  row:4, col:15, ref:"Poisonous metalloid; wood preservative."},
           {sym:"Se", name:"Selenium",          num:34,  mass:78.971,   state:"solid",  row:4, col:16, ref:"Uses in photocells, glass tinting."},
           {sym:"Br", name:"Bromine",           num:35,  mass:79.904,   state:"liquid", row:4, col:17, ref:"Red‑brown liquid; flame retardants."},
           {sym:"Kr", name:"Krypton",           num:36,  mass:83.798,   state:"gas",    row:4, col:18, ref:"Used in high‑end lighting."},
  /* 5 */  {sym:"Rb", name:"Rubidium",          num:37,  mass:85.468,   state:"solid",  row:5, col:1,  ref:"Soft metal; research and GPS clocks."},
           {sym:"Sr", name:"Strontium",         num:38,  mass:87.62,    state:"solid",  row:5, col:2,  ref:"Red fireworks colour; bone scans."},
           {sym:"Y",  name:"Yttrium",           num:39,  mass:88.906,   state:"solid",  row:
