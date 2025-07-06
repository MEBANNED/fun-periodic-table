/**
 * Interactive Periodic Table (118 elements)
 *  • Default view  – Atomic Specs (number + mass)
 *  • Second view   – Quick Reference (1-line description)
 *  • Clicking an element opens a popup with both views.
 *
 *  Row = period (1-7, 8 = lanthanides, 9 = actinides)
 *  Col = group (1-18). Grid uses CSS grid-column/row.
 */

/* ---------- colour by state ---------------------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- FULL DATASET (1 – 118) --------------------------------- */
const ELEMENTS = [
/*  period 1  */
{sym:"H",  name:"Hydrogen",   num:1,   mass:1.008,   row:1,col:1,  state:"gas",    ref:"Lightest element; fuels stars."},
{sym:"He", name:"Helium",     num:2,   mass:4.0026,  row:1,col:18, state:"gas",    ref:"Inert gas for balloons & MRI."},

/*  period 2  */
{sym:"Li", name:"Lithium",    num:3,   mass:6.94,    row:2,col:1,  state:"solid",  ref:"Rechargeable batteries."},
{sym:"Be", name:"Beryllium",  num:4,   mass:9.0122,  row:2,col:2,  state:"solid",  ref:"Aerospace structures."},
{sym:"B",  name:"Boron",      num:5,   mass:10.81,   row:2,col:13, state:"solid",  ref:"Borosilicate glass, detergents."},
{sym:"C",  name:"Carbon",     num:6,   mass:12.011,  row:2,col:14, state:"solid",  ref:"Backbone of organic life."},
{sym:"N",  name:"Nitrogen",   num:7,   mass:14.007,  row:2,col:15, state:"gas",    ref:"78 % of Earth’s atmosphere."},
{sym:"O",  name:"Oxygen",     num:8,   mass:15.999,  row:2,col:16, state:"gas",    ref:"Essential for respiration."},
{sym:"F",  name:"Fluorine",   num:9,   mass:18.998,  row:2,col:17, state:"gas",    ref:"Most reactive; in Teflon."},
{sym:"Ne", name:"Neon",       num:10,  mass:20.180,  row:2,col:18, state:"gas",    ref:"Neon signs & lasers."},

/*  period 3  */
{sym:"Na", name:"Sodium",     num:11,  mass:22.990,  row:3,col:1,  state:"solid",  ref:"Forms table salt (NaCl)."},
{sym:"Mg", name:"Magnesium",  num:12,  mass:24.305,  row:3,col:2,  state:"solid",  ref:"Light alloys; fireworks."},
{sym:"Al", name:"Aluminium",  num:13,  mass:26.982,  row:3,col:13, state:"solid",  ref:"Cans, foil, aircraft."},
{sym:"Si", name:"Silicon",    num:14,  mass:28.085,  row:3,col:14, state:"solid",  ref:"Core semiconductor."},
{sym:"P",  name:"Phosphorus", num:15,  mass:30.974,  row:3,col:15, state:"solid",  ref:"DNA, fertilizers; glow-sticks."},
{sym:"S",  name:"Sulfur",     num:16,  mass:32.06,   row:3,col:16, state:"solid",  ref:"Matches, vulcanized rubber."},
{sym:"Cl", name:"Chlorine",   num:17,  mass:35.45,   row:3,col:17, state:"gas",    ref:"Disinfectant; PVC plastic."},
{sym:"Ar", name:"Argon",      num:18,  mass:39.948,  row:3,col:18, state:"gas",    ref:"Inert welding gas."},

/*  period 4  */
{sym:"K",  name:"Potassium",  num:19,  mass:39.098,  row:4,col:1,  state:"solid",  ref:"Essential nutrient."},
{sym:"Ca", name:"Calcium",    num:20,  mass:40.078,  row:4,col:2,  state:"solid",  ref:"Builds bones and teeth."},
{sym:"Sc", name:"Scandium",   num:21,  mass:44.956,  row:4,col:3,  state:"solid",  ref:"Al-Sc aerospace alloys."},
{sym:"Ti", name:"Titanium",   num:22,  mass:47.867,  row:4,col:4,  state:"solid",  ref:"Strong, light metal; implants."},
{sym:"V",  name:"Vanadium",   num:23,  mass:50.942,  row:4,col:5,  state:"solid",  ref:"Strengthens steel."},
{sym:"Cr", name:"Chromium",   num:24,  mass:51.996,  row:4,col:6,  state:"solid",  ref:"Stainless steel corrosion resistance."},
{sym:"Mn", name:"Manganese",  num:25,  mass:54.938,  row:4,col:7,  state:"solid",  ref:"Steel additive; batteries."},
{sym:"Fe", name:"Iron",       num:26,  mass:55.845,  row:4,col:8,  state:"solid",  ref:"Most-used metal; Earth’s core."},
{sym:"Co", name:"Cobalt",     num:27,  mass:58.933,  row:4,col:9,  state:"solid",  ref:"Li-ion batteries; blue glass."},
{sym:"Ni", name:"Nickel",     num:28,  mass:58.693,  row:4,col:10, state:"solid",  ref:"Coins, stainless steel."},
{sym:"Cu", name:"Copper",     num:29,  mass:63.546,  row:4,col:11, state:"solid",  ref:"Top electrical conductor."},
{sym:"Zn", name:"Zinc",       num:30,  mass:65.38,   row:4,col:12, state:"solid",  ref:"Galvanizes steel; brass."},
{sym:"Ga", name:"Gallium",    num:31,  mass:69.723,  row:4,col:13, state:"solid",  ref:"Melts in hand; LEDs & lasers."},
{sym:"Ge", name:"Germanium",  num:32,  mass:72.630,  row:4,col:14, state:"solid",  ref:"Fiber optics; IR optics."},
{sym:"As", name:"Arsenic",    num:33,  mass:74.922,  row:4,col:15, state:"solid",  ref:"Poisonous metalloid; semiconductors."},
{sym:"Se", name:"Selenium",   num:34,  mass:78.971,  row:4,col:16, state:"solid",  ref:"Solar cells; photocells."},
{sym:"Br", name:"Bromine",    num:35,  mass:79.904,  row:4,col:17, state:"liquid", ref:"Flame retardants."},
{sym:"Kr", name:"Krypton",    num:36,  mass:83.798,  row:4,col:18, state:"gas",    ref:"High-end lighting."},

/*  period 5  */
{sym:"Rb", name:"Rubidium",   num:37,  mass:85.468,  row:5,col:1,  state:"solid",  ref:"Research; atomic clocks."},
{sym:"Sr", name:"Strontium",  num:38,  mass:87.62,   row:5,col:2,  state:"solid",  ref:"Red fireworks; bone scans."},
{sym:"Y",  name:"Yttrium",    num:39,  mass:88.906,  row:5,col:3,  state:"solid",  ref:"LED phosphors; superconductors."},
{sym:"Zr", name:"Zirconium",  num:40,  mass:91.224,  row:5,col:4,  state:"solid",  ref:"Nuclear fuel cladding."},
{sym:"Nb", name:"Niobium",    num:41,  mass
