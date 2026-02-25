// function addName() {
//   const inputName = document.getElementById('input-name');
//   const newName = inputName.value;
//   const nameContainer = document.getElementById('name-container');
//   const newParagraph = document.createElement('p');
//   newParagraph.innerText = newName;
//   nameContainer.appendChild(newParagraph);
//   inputName.value = '';
// }
// Now we will do the same task using addEventListener
document.getElementById('addname-btn')
  .addEventListener("click", function () {
    const nameInput = document.getElementById('input-name');

    const newName = nameInput.value;
    const nameContainer = document.getElementById('name-container');
    const newP = document.createElement('p');
    newP.innerText = newName;
    nameContainer.appendChild(newP);
    nameInput.value=

})



// Example 2: remove last added name
document.getElementById('remove-btn').addEventListener('click', function () {
  const nameContainer = document.getElementById('name-container');
  const last = nameContainer.lastElementChild;
  if (!last) return;
  nameContainer.removeChild(last);
});

