// const nums = [1, 2, 3, 4, 5];
// const doubledNum = [];
// for (const num of nums) {
//   doubledNum.push(num*2)
// }
// console.log(doubledNum)

// we can do the same thing using map and callback function

// const numbers = [1, 2, 3, 4, 5];
// const doubleIt = (num) => num * 2;
// const doubled = numbers.map(doubleIt);
// console.log(doubled)


// we can do the same thing using a single line code

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// const squared = numbers.map(num => num * num);
// console.log(doubled)
// console.log(squared)
// const friends = ['ghalib', "kheya", "rushda"];
// const firsLetters = friends.map(friend => friend[0]);
// console.log(firsLetters)
// const products = [
//   { name: "computer", price: 101 },
//   { name: "laptop", price: 102 },
//   { name: "tablet", price: 103 },
// ];
// const prices = products.map(product => product.price);
// const names = products.map(product => product.name.toUpperCase());
// console.log(prices)
// console.log(names)


// similar way we can use foreach
// let sum = 0;
// [5, 10, 15].forEach(n =>
// sum=sum+ n);
// console.log(sum);


// // USE OF MAP
// const nums = [10, 20, 30];

// const result = nums.map((value, index) => {
//   return index + ":" + value;
// });

// console.log(result);
// use of filter find and reduce
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
const friends = ["ghalib", "kheya", "rakhi", "rushda"];
const sixdgtNames = friends.filter(friend => friend.length > 5);
const friends = ["ghalib", "kheya", "rakhi", "rushda"];

const rNames = friends.filter(friend => friend.startsWith("r"));
console.log(rNames); 
console.log(sixdgtNames)
