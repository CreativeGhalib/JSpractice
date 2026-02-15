// function oddAverage(numbers) {
//   const odds = [];
//   for (const number of numbers) {
//     if (number % 2 !== 0) {
//       odds.push(number)

//     }
//   }
//   let sum = 0;
//   for (const number of odds) {
//     sum = sum + number;

//   }
//   const count = odds.length;
//   const avg = sum / count;
//   return avg;
// }
// const numbers = [1, 2, 3, 4, 6];
// const avg = oddAverage(numbers);
// console.log('average of odd numbers is', avg);
// function oddAverage(arr) {
//   const odds = [];
//   for (const number of arr) {
//     if (number % 2 !== 0) {
//       odds.push(number);
//     }
//   }

//   let sum = 0;
//   for (const num of odds) {
//     sum += num;
//   }

//   const length = odds.length;
//   const avg = length === 0 ? 0 : sum / length;
//   return avg;
// }

// const arr = [1, 2, 3, 4, 5];
// const avg = oddAverage(arr);
// console.log(avg); // 3


