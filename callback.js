// document.getElementById("#btn")
//   .addEventListener("click", function (event) {

// })
function settleLife(name, isBcs,marriage,patri) {
  if (isBcs) {
    marriage(patri);
  }
}
function boloKobul(patri) {
  console.log('kobul',patri);
}

settleLife("tomal", true, boloKobul,"nari");

