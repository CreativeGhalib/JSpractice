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
// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log('Sum:', sum);

// Problem 2: Find the largest number in an array
// const scores = [85, 92, 78, 96, 88];
// const maxScore = Math.max(...scores);
// console.log('Max Score:', maxScore);
// Problem 3: Filter out even numbers from an array
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = mixedNumbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers:', oddNumbers);

// Problem 4: Reverse an array without using reverse method
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = [...originalArray].reverse();
console.log('Reversed:', reversedArray);

// Problem 5: Remove duplicates from an array
const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueArray = [...new Set(duplicateArray)];
console.log('Unique:', uniqueArray);

// Problem 6: Create an object with name, age, and city properties and access them
const person = {
  name: 'John',
  age: 25,
  city: 'New York',
};
console.log('Name:', person.name, 'Age:', person.age, 'City:', person.city);

// Problem 7: Add a new property to an existing object and delete another
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
};
car.color = 'Red';
delete car.year;
console.log('Car:', car);

// Problem 8: Merge two objects into one
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log('Merged:', mergedObj);

// Problem 9: Extract all keys and values from an object separately
const student = {
  name: 'Alice',
  grade: 'A',
  subject: 'Math',
};
const keys = Object.keys(student);
const values = Object.values(student);
console.log('Keys:', keys);
console.log('Values:', values);

// Problem 10: Find an object in an array of objects by a specific property
const users = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Mike' },
];
const foundUser = users.find(user => user.id === 2);
console.log('Found User:', foundUser);
