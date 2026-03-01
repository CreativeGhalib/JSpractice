// document.getElementById("#btn")
//   .addEventListener("click", function (event) {

// })
// function settleLife(name, isBcs,marriage,patri) {
//   if (isBcs) {
//     marriage(patri);
//   }
// }
// function boloKobul(patri) {
//   console.log('kobul',patri);
// }

// settleLife("tomal", true, boloKobul,"nari");


// function displayNumber(num) {
//   console.log(num);
// }
// function addiTion(num1, num2) {
//   let sum = num1 + num2;
//   displayNumber(sum)
// }
// addiTion(12, 12);

function add(num1, num2) {
  console.log('arguments:', arguments);
  const args = [...arguments]; //(we use spread operator to connvert arguments/object like array to array )

  console.log(args);
}
add(12, 14,11,9)
