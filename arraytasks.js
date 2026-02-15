// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
// for of loop
// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
// for (const fruit of fruits) {
//     console.log(fruit);
// };
// console.log(fruits[3]);
// fruits[2] = 'jambura';
// console.log(fruits);

// const number = 7;
// if (number < 1) {
//   console.log("Numberchoto ekta number paise");
// }
// console.log("something else is cooking");

// while loop
// const number = 0;
// while (number < 5) {
//   console.log(' number is less than 5');
// }

// ============================================
// 10 ARRAY AND OBJECT PROBLEMS WITH SOLUTIONS
// ============================================

// Problem 1: Find the sum of all numbers in an array
// Solution: Use reduce to sum all array elements
// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log('Sum:', sum);

// Problem 2: Find the largest number in an array
// Solution: Use Math.max with spread operator to find maximum value
// const scores = [85, 92, 78, 96, 88];
// const maxScore = Math.max(...scores);
// console.log('Max Score:', maxScore);
// Problem 3: Filter out even numbers from an array
// Solution: Use filter to get only odd numbers from array
// const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = mixedNumbers.filter((num) => num % 2 !== 0);
// console.log('Odd Numbers:', oddNumbers);

// Problem 4: Reverse an array without using reverse method
// Solution: Use spread and reverse to create reversed array copy
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = [...originalArray].reverse();
console.log('Reversed:', reversedArray);

// Problem 5: Remove duplicates from an array
// Solution: Use Set to remove duplicate values from array
const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueArray = [...new Set(duplicateArray)];
console.log('Unique:', uniqueArray); //
 
