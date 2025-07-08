// Get modal and related elements
const modal       = document.getElementById('infoModal');
const modalSymbol = document.getElementById('modalSymbol');
const modalName   = document.getElementById('modalName');
const quickInfo   = document.getElementById('quickInfo');
const specsInfo   = document.getElementById('specsInfo');
const toggleQuickBtn = document.getElementById('toggleQuick');
const toggleSpecsBtn = document.getElementById('toggleSpecs');
const closeBtn    = document.getElementById('closeBtn');

// Function to open the modal with Quick Reference content
function openModal(element) {
  // Get element data from clicked element’s dataset
  const symbol    = element.id;
  const name      = element.dataset.name;
  const atomicNum = element.dataset.number;
  const atomicMass= element.dataset.mass;
  const quickText = element.dataset.quick;
  // Populate modal fields
  modalSymbol.textContent = symbol;
  modalName.textContent   = name;
  quickInfo.textContent   = quickText;
  specsInfo.textContent   = `Atomic Number: ${atomicNum}, Atomic Mass: ${atomicMass}`;
  // Always default to Quick Reference view on open
  quickInfo.style.display = 'block';
  specsInfo.style.display = 'none';
  toggleQuickBtn.classList.add('active');
  toggleSpecsBtn.classList.remove('active');
  // Show the modal popup
  modal.style.display = 'block';
}

// Attach click event to all element boxes
document.querySelectorAll('.element').forEach(el => {
  el.addEventListener('click', () => openModal(el));
});

// Toggle button event handlers
toggleQuickBtn.addEventListener('click', () => {
  // Show Quick Reference content, hide Atomic Specs
  quickInfo.style.display = 'block';
  specsInfo.style.display = 'none';
  // Update active button style
  toggleQuickBtn.classList.add('active');
  toggleSpecsBtn.classList.remove('active');
});
toggleSpecsBtn.addEventListener('click', () => {
  // Show Atomic Specs content, hide Quick Reference
  quickInfo.style.display = 'none';
  specsInfo.style.display = 'block';
  // Update active button style
  toggleSpecsBtn.classList.add('active');
  toggleQuickBtn.classList.remove('active');
});

// Close modal when '×' button is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
};
// Close modal if clicking outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
