/* -----------------------------------------------------------------------
   Fun Interactive Periodic Table — “Atomic Specs” (default) & “Quick Reference”
   Complete dataset: all 118 elements with atomic number, mass, state, grid pos.
   -------------------------------------------------------------------- */

/* ---------- colour map by physical state ----------------------------- */
const STATE_COLOUR = {
  solid:   "#90be6d",
  liquid:  "#8ecae6",
  gas:     "#ffd93b",
  unknown: "#adb5bd"
};

/* ---------- periodic‑table dataset (118) ----------------------------- */
const ELEMENTS = [
/* --- period 1 --- */
{sym:"H",  name:"Hydrogen",          num:1,   mass:1.008,    state:"gas",    row:1,col:1,  ref:"Lightest element; fuels stars."},
{sym:"He", name:"Helium",            num:2,   mass:4.0026,   state:"gas",    row:1,col:18, ref:"Inert gas for cryogenics & balloons."},
/* --- period 2 --- */
{sym:"Li", name:"Lithium",           num:3,   mass:6.94,     state:"solid",  row:2,col:1,  ref:"Soft metal in rechargeable batteries."},
{sym:"Be", name:"Beryllium",         num:4,   mass:9.0122,   state:"solid",  row:2,col:2,  ref:"Light metal for aerospace parts."},
{sym:"B",  name:"Boron",             num:5,   mass:10.81,    state:"solid",  row:2,col:13, ref:"Used in borosilicate glass & detergents."},
{sym:"C",  name:"Carbon",            num:6,   mass:12.011,   state:"solid",  row:2,col:14, ref:"Basis of organic life; diamond/graphite."},
{sym:"N",  name:"Nitrogen",          num:7,   mass:14.007,   state:"gas",    row:2,col:15, ref:"78 % of Earth’s atmosphere."},
{sym:"O",  name:"Oxygen",            num:8,   mass:15.999,   state:"gas",    row:2,col:16, ref:"Essential for respiration & combustion."},
{sym:"F",  name:"Fluorine",          num:9,   mass:18.998,   state:"gas",    row:2,col:17, ref:"Highly reactive; used in Teflon."},
{sym:"Ne", name:"Neon",              num:10,  mass:20.180,   state:"gas",    row:2,col:18, ref:"Bright orange‑red in neon lights."},
/* --- period 3 --- */
{sym:"Na", name:"Sodium",            num:11,  mass:22.990,   state:"solid",  row:3,col:1,  ref:"Forms common salt with chlorine."},
{sym:"Mg", name:"Magnesium",         num:12,  mass:24.305,   state:"solid",  row:3,col:2,  ref:"Burns bright white; lightweight alloys."},
{sym:"Al", name:"Aluminium",         num:13,  mass:26.982,   state:"solid",  row:3,col:13, ref:"Light metal for cans and aircraft."},
{sym:"Si", name:"Silicon",           num:14,  mass:28.085,   state:"solid",  row:3,col:14, ref:"Key semiconductor in electronics."},
{sym:"P",  name:"Phosphorus",        num:15,  mass:30.974,   state:"solid",  row:3,col:15, ref:"Vital for DNA, fertilizers; glows."},
{sym:"S",  name:"Sulfur",            num:16,  mass:32.06,    state:"solid",  row:3,col:16, ref:"Yellow element; rotten‑egg smell."},
{sym:"Cl", name:"Chlorine",          num:17,  mass:35.45,    state:"gas",    row:3,col:17, ref:"Disinfects water; in PVC plastics."},
{sym:"Ar", name:"Argon",             num:18,  mass:39.948,   state:"gas",    row:3,col:18, ref:"Inert atmosphere for welding & bulbs."},
/* --- period 4 --- */
{sym:"K",  name:"Potassium",         num:19,  mass:39.098,   state:"solid",  row:4,col:1,  ref:"Essential nutrient; bursts in water."},
{sym:"Ca", name:"Calcium",           num:20,  mass:40.078,   state:"solid",  row:4,col:2,  ref:"Builds bones and teeth."},
{sym:"Sc", name:"Scandium",          num:21,  mass:44.956,   state:"solid",  row:4,col:3,  ref:"Strengthens aluminum alloys."},
{sym:"Ti", name:"Titanium",          num:22,  mass:47.867,   state:"solid",  row:4,col:4,  ref:"Strong, light metal; implants, jets."},
{sym:"V",  name:"Vanadium",          num:23,  mass:50.942,   state:"solid",  row:4,col:5,  ref:"Added to steel for toughness."},
{sym:"Cr", name:"Chromium",          num:24,  mass:51.996,   state:"solid",  row:4,col:6,  ref:"Stainless‑steel corrosion resistance."},
{sym:"Mn", name:"Manganese",         num:25,  mass:54.938,   state:"solid",  row:4,col:7,  ref:"Steel additive; battery component."},
{sym:"Fe", name:"Iron",              num:26,  mass:55.845,   state:"solid",  row:4,col:8,  ref:"Most‑used metal; Earth's core."},
{sym:"Co", name:"Cobalt",            num:27,  mass:58.933,   state:"solid",  row:4,col:9,  ref:"Super‑alloys, blue glass pigment."},
{sym:"Ni", name:"Nickel",            num:28,  mass:58.693,   state:"solid",  row:4,col:10, ref:"Coins, stainless steel, batteries."},
{sym:"Cu", name:"Copper",            num:29,  mass:63.546,   state:"solid",  row:4,col:11, ref:"Excellent electrical conductor."},
{sym:"Zn", name:"Zinc",              num:30,  mass:65.38,    state:"solid",  row:4,col:12, ref:"Galvanizes steel; brass component."},
{sym:"Ga", name:"Gallium",           num:31,  mass:69.723,   state:"solid",  row:4,col:13, ref:"Melts in hand; LEDs & semiconductors."},
{sym:"Ge", name:"Germanium",         num:32,  mass:72.630,   state:"solid",  row:4,col:14, ref:"Fiber optics & infrared optics."},
{sym:"As", name:"Arsenic",           num:33,  mass:74.922,   state:"solid",  row:4,col:15, ref:"Poisonous metalloid; wood preservative."},
{sym:"Se", name:"Selenium",          num:34,  mass:78.971,   state:"solid",  row:4,col:16, ref:"Photocells, glass de‑colorizer."},
{sym:"Br", name:"Bromine",           num:35,  mass:79.904,   state:"liquid", row:4,col:17, ref:"Red‑brown liquid; flame retardants."},
{sym:"Kr", name:"Krypton",           num:36,  mass:83.798,   state:"gas",    row:4,col:18, ref:"Used in high‑end lights & lasers."},
/* --- period 5 --- */
{sym:"Rb", name:"Rubidium",          num:37,  mass:85.468,   state:"solid",  row:5,col:1,  ref:"Soft metal; research, atomic clocks."},
{sym:"Sr", name:"Strontium",         num:38,  mass:87.62,    state:"solid",  row:5,col:2,  ref:"Red fireworks colour; bone imaging."},
{sym:"Y",  name:"Yttrium",           num:39,  mass:88.906,   state:"solid",  row:5,col:3,  ref:"Phosphors in LEDs and CRTs."},
{sym:"Zr", name:"Zirconium",         num:40,  mass:91.224,   state:"solid",  row:5,col:4,  ref:"Nuclear reactor cladding."},
{sym:"Nb", name:"Niobium",           num:41,  mass:92.906,   state:"solid",  row:5,col:5,  ref:"Superconducting magnets."},
{sym:"Mo", name:"Molybdenum",        num:42,  mass:95.95,    state:"solid",  row:5,col:6,  ref:"Alloy steel; high‑temp strength."},
{sym:"Tc", name:"Technetium",        num:43,  mass:98,       state:"solid",  row:5,col:7,  ref:"Medical radioactive tracer."},
{sym:"Ru", name:"Ruthenium",         num:44,  mass:101.07,   state:"solid",  row:5,col:8,  ref:"Hardens platinum alloys."},
{sym:"Rh", name:"Rhodium",           num
