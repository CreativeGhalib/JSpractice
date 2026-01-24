// ========================================
// JavaScript Practice - Basic Examples
// ========================================

// 1. CLICK COUNTER
// Get elements
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Add event listeners
incrementBtn.addEventListener('click', function () {
  count++;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', function () {
  count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', function () {
  count = 0;
  countDisplay.textContent = count;
});

// 2. TEXT INPUT - Live Greeting
const nameInput = document.getElementById('name-input');
const greetingText = document.getElementById('greeting-text');

nameInput.addEventListener('input', function () {
  const name = nameInput.value;
  if (name === '') {
    greetingText.textContent = 'Guest';
  } else {
    greetingText.textContent = name;
  }
});

// 3. TOGGLE COLOR BOX
const toggleBtn = document.getElementById('toggle-btn');
const colorBox = document.getElementById('color-box');
let isBlue = true;

toggleBtn.addEventListener('click', function () {
  if (isBlue) {
    colorBox.style.background = '#e94560';
  } else {
    colorBox.style.background = '#007bff';
  }
  isBlue = !isBlue;
});

// 4. ADD ITEMS TO LIST
const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemList = document.getElementById('item-list');

addItemBtn.addEventListener('click', function () {
  const itemText = itemInput.value;

  if (itemText !== '') {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = itemText;

    // Add to list
    itemList.appendChild(li);

    // Clear input
    itemInput.value = '';
  }
});

// Console log
console.log('Script loaded!');
