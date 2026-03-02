// function add(num1, num2 = 0) {
//   const total = num1 + num2;
//   console.log(num1, num2, total);

// }
// add(10);
// add(10, 20);

// const numbers = [12, 11, 2, 3, 4, 15];
// const maxNum = Math.max(...numbers);
// console.log(...numbers)

// const params = [11, 12, 13];
// function sum(x, y, z) {
//   return x + y + z;
// }
// const result = sum(params);
// console.log(result)
// let price = 0;
// if (!price) {
//   console.log('price is truthy');
// } else {
//   console.log('price is falsy');
// }

// closure task
// function createUser() {
//   let password = "12345"
//   return function checkPassword(input) {
//     return input === password;
//   }
// }
// const login = createUser();
// console.log(login("12345"));

// more about clouser

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const inc = outer();//inc is a function at the end
console.dir(inc);
inc(); // 1
console.dir(inc);
inc(); // 2
