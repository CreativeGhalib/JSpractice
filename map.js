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

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled)
