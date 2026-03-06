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
