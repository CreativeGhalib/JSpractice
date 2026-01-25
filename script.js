/***

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 65;

let height = 5.5;

if (typeof weight === 'string') weight = parseFloat(weight);
if (typeof height === 'string') height = parseFloat(height);

let heightInMeters;
if (isNaN(height) || isNaN(weight)) {
  console.error('Invalid input: weight and height must be numbers.');
} else {
  if (height > 3) {
    heightInMeters = height * 0.3048;
    console.log('Interpreting height as feet.');
    console.log('Your height: ' + height + ' feet');
  } else {
    heightInMeters = height;
    console.log('Interpreting height as meters.');
    console.log('Your height: ' + height + ' meters');
  }

  if (heightInMeters <= 0) {
    console.error('Invalid height value: must be greater than 0.');
  } else {
    let bmi = weight / (heightInMeters * heightInMeters);

    console.log('Your weight: ' + weight + ' kg');
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
  }
}

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let bPrice = 300;
if (bPrice > 500) {
  console.log('free Coke');
} else {
  console.log('Plz pay price 30tk for Coke');
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 85;
if (score >= 90 && score <= 100) {
  console.log('You got A Grade!!');
} else if (score >= 80 && score < 90) {
  console.log('You got B Grade!!');
} else if (score >= 70 && score < 80) {
  console.log('You got C Grade!!');
} else if (score >= 60 && score < 70) {
  console.log('You got D Grade!!');
} else if (score >= 0 && score < 60) {
  console.log('You got F Grade!!');
} else {
  console.log('Invalid Score!');
}

/***

if you get more then 80 then inside your friend score.
    If your friend get more than 80. then go for a lunch.
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note:
use  nested if-else-if-else
*/
let myScore = 81;
let friendScore = 75;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log('Go for a lunch with your friend.');
  } else if (friendScore >= 60) {
    console.log('Tell your friend, good luck next time.');
  } else if (friendScore >= 40) {
    console.log("Keep your friend's message unseen.");
  } else {
    console.log('Block your friend.');
  }
} else {
  console.log('Go to home and sleep and act sad.');
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result.
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else.

also, write it using ternary operator.

 */
let num1 = 30;
let num2 = 20;
let result;
if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
console.log(result);
// using ternary operator
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);
