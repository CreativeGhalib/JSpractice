
// Simple BMI Calculator
let weight = 65;

let height = 5.5;

let heightInMeters = height * 0.3048;

let bmi = weight / (heightInMeters * heightInMeters);

console.log('Your weight: ' + weight + ' kg');
console.log('Your height: ' + height + ' feet');
console.log('Your BMI: ' + bmi.toFixed(1));

console.log('');
console.log('Result:');

if (bmi < 18.5) {
  console.log('You are Underweight ');
  console.log(' Try to eat more healthy food!');
} else if (bmi < 25) {
  console.log('You are Normal Weight ');
  console.log('Great job! Keep it up!');
} else if (bmi < 30) {
  console.log('You are Overweight ');
  console.log('Try some exercise and eat healthy!');
} else {
  console.log('You are Obese ');
  console.log('Please talk to a doctor for help!');
}
