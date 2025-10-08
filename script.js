// --- Part 2: JavaScript Functions ---
// This script demonstrates scope, parameters, and return values.

// Global variable (accessible anywhere)
let clickCount = 0;

/**
 * Function 1: addNumbers
 * Takes two numbers, adds them, and returns the result.
 */
function addNumbers(a, b) {
  const sum = a + b; // 'sum' is local to this function
  return sum;        // 'return' sends the value back to where the function was called
}

// Example usage in console:
console.log("2 + 3 =", addNumbers(2, 3)); // Output: 5


/**
 * Function 2: updateClickCount
 * Demonstrates modifying a global variable and DOM manipulation.
 */
function updateClickCount() {
  // Accessing and updating a global variable
  clickCount++;
  console.log(`Button clicked ${clickCount} times`);

  // Change button text dynamically
  const btn = document.querySelector('.animated-btn');
  btn.textContent = `Clicked ${clickCount} times!`;
}


/**
 * Function 3: changeBoxColor
 * Demonstrates function parameters.
 * The color passed in controls what color the box becomes.
 */
function changeBoxColor(newColor) {
  const box = document.querySelector('.animated-box');
  box.style.backgroundColor = newColor;
}


/**
 * Function 4: randomColor
 * Returns a random hex color string like "#A3F2C1"
 */
function randomColor() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomHex}`;
}

// --- Event Listeners ---
// When the button is clicked, update count and change box color

document.querySelector('.animated-btn').addEventListener('click', function() {
  updateClickCount(); // increases counter + updates button text
  const color = randomColor(); // generate new random color
  changeBoxColor(color); // apply it
});

// --- Part 3: Combining CSS Animations with JavaScript ---

// 1️⃣ Start/Stop Animation
const box = document.querySelector('.animated-box');
const toggleBtn = document.getElementById('toggleAnimationBtn');
let isAnimating = true;

toggleBtn.addEventListener('click', () => {
  if (isAnimating) {
    box.style.animationPlayState = 'paused'; // pause animation
    toggleBtn.textContent = '▶️ Start Animation';
  } else {
    box.style.animationPlayState = 'running'; // resume animation
    toggleBtn.textContent = '⏸️ Stop Animation';
  }
  isAnimating = !isAnimating;
});

// 2️⃣ Modal Popup Control
const modal = document.getElementById('infoModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('active'); // add CSS class to trigger animation
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active'); // remove class to fade out
});

// Optional: Close modal if user clicks outside modal-content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});
