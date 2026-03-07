let arr=[1,2,3,4,5];
console.log([...arr])
// hide function

const spinner = document.getElementById('spinner');
const grid = document.getElementById('grid');

function showSpinner() {
  spinner.classList.remove('hidden');
}

function hideSpinner() {
  spinner.classList.add('hidden');
}

// fetch function
async function loadIssues() {
  try {
    showSpinner();
    grid.innerHTML = ''; //আগের data clear

    const res = await fetch('./data/issues.json');
    const data = await res.json();

    // এখানে render function কল হবে
    // renderIssues(data);
  } catch (err) {
    grid.innerHTML = `<p class="text-red-600">Failed to load</p>`;
  } finally {
    hideSpinner(); // success বা error যাই হোক spinner বন্ধ হবে
  }
}

loadIssues();
// how to use object entries

Object.entries()
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
// for...in (object loop  way)
for (const key in user) {
  console.log(key, user[key]);
}
// Example 1: Click Event
document.getElementById('btn1').addEventListener('click', function() {
    console.log('Button clicked!');
    alert('You clicked the button!');
});


// Example 2: Double Click Event
let count = 0;
document.getElementById('btn2').addEventListener('dblclick', function() {
    count++;
    console.log('Double click count: ' + count);
});

// Example 3: Mouse Enter Event
document.getElementById('box').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'red';
    console.log('Mouse entered the box');
});


// Example 4: Mouse Leave Event
document.getElementById('box').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'blue';
    console.log('Mouse left the box');
});


// Example 5: Keyboard Event (keypress)
document.getElementById('input').addEventListener('keypress', function(event) {
    console.log('Key pressed: ' + event.key);
});


// Example 6: Change Event (dropdown/select)
document.getElementById('select').addEventListener('change', function() {
    console.log('Selected value: ' + this.value);
});
// Example 7: Focus Event
document.getElementById('input2').addEventListener('focus', function() {
    this.style.border = '2px solid green';
    console.log('Input focused');
});

// Example 8: Submit Event (form)
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    alert('Form has been submitted!');
});
// Example 9: Input Event (real-time typing)
document.getElementById('textInput').addEventListener('input', function() {
    console.log('Current value: ' + this.value);
    document.getElementById('output').textContent = this.value;
});


// Example 10: Scroll Event
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    console.log('Scroll position: ' + scrollPosition);

    if (scrollPosition > 100) {
        console.log('Scrolled more than 100px');
    }
});
