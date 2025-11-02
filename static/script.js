function makeCell(e){
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.style.gridColumnStart = e.xpos;
  cell.style.gridRowStart = e.ypos;
  cell.dataset.cat = (e.category||"").toLowerCase();

  // number (top-left)
  const num = document.createElement("div");
  num.className = "num";
  num.textContent = e.number;
  num.style.position = "absolute";
  num.style.top = "3px";
  num.style.left = "6px";
  num.style.fontSize = "10px";
  num.style.opacity = "0.7";

  // symbol (center)
  const sym = document.createElement("div");
  sym.className = "sym";
  sym.textContent = e.symbol;

  cell.style.position = "relative";
  cell.appendChild(num);
  cell.appendChild(sym);

  cell.addEventListener("click", () => openPopup(e));
  return cell;
}
