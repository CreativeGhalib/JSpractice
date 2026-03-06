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
