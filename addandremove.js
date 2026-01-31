// const friends = ['Alice', 'Bob', 'Charlie'];
// friends.push('MESBAH');
// console.log(friends);
// const removedFriend = friends.pop();
// console.log(`removedFriend: ${removedFriend}`);
// const firstFriend = friends.shift();
// console.log(friends);
// console.log(firstFriend);
// const newFriendCount = friends.unshift('MESBAH');
// console.log(newFriendCount);
// console.log(friends);
// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Bob'));
// length = friends[2].length;
// console.log(`Lenth is ${length}`);
// let a = 'Hello';
// console.log(a.length);
// let b = 'hello';
// // Use of uppercase and lower case
// if (a.toLowerCase() === b.toLowerCase()) {
//   console.log('value is same');
// } else {
//   console.log('Value not same');
// }
// console.log(friends.indexOf('MESBAH'));
// console.log(friends);
// console.log(friends.indexOf('Bob'));
// let newwfrnd = friends.map(f => f.toLowerCase());
// console.log(newwfrnd);

// console.log(Array.isArray(friends));
// const joinedFriends = friends.join('|');
// console.log(joinedFriends);

// // concat/join
// const moreFriends = ['David', 'Eve'];
// const allFriends = friends.concat(moreFriends);
// console.log(allFriends);
// // slice
// const someFriends = allFriends.slice(1, 4);
// console.log(someFriends);
// // splice
// allFriends.splice(2, 1, 'Zara');
// console.log(allFriends);

// // 1. Declare an array
// // Declare an array with 5 elements containing fruits
// // console log the 3rd index element
// // change the value of the 2nd index element to jambura
// // console log the final array
// //
// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
// console.log(fruits);
// console.log(fruits[3]);
// // Findings: Index assignment (fruits[2] = ...) and splice() diye array element replace kora jai.
// // Difference: splice() remove kora value return kore, index assignment kore na. Duto method-ei main array update hoy.
// fruits[2] = 'jambura';
// console.log(fruits);


// // Declare an array of 3 tourist destinations
// // Add a new tourist destination to your tourist array
// // Add two more to your array
// // Remove the last tourist destination you have added
// // display the final array as output
// let tourisTdestinations = ['dhaka', 'sylhet', 'coxsbazar'];
// tourisTdestinations.push('sundarban');
// tourisTdestinations.push('bandarban', 'saintmartin');
// let rejectedDestination = tourisTdestinations.pop();
// console.log(tourisTdestinations);
// console.log(`rejectedDestination: ${rejectedDestination}`);
// // 3. Checking Array Membership with ‘includes’
// // Instructions:

// // Create an array of books containing different book.

// // Use the includes method to check if the array contains a javascript book.

// // Print a message to the console indicating whether the element is present in the array or not.
// let books = ['math', 'english', 'bangla', 'javascript', 'science'];
// if (books.includes("javascript")) {
//   console.log("book is availbale");
// } else {
//   console.log("books not availble ,try again tomorrow!");
// }
// // console.log(books.includes("javascript"));
// // 4. Checking if it's an Array
// // Instructions:
// //
// // Create different variables, each containing either an array or a non-array value.
// //
// // Now use isArray to check if each variable is an array.
// //
// // Print a message to the console indicating whether each variable is an array or not.
// // cspell:words Hasan cgpa
// let studentsName = ['Hasan', 'James', 'LRB'];
// let studentRoll = {
//   roll: 12,
//   cgpa: 3.4,
// };

// if (Array.isArray(studentsName)) {
//   console.log("Yes it is Array");
// } else {
//   console.log("Not an Array!!");
// }
// if (Array.isArray(studentRoll)) {
//   console.log('Yes it is Array');
// } else {
//   console.log('Not an Array!!');
// }

// Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// let studentsName = ['Hasan', 'James', 'LRB'];
// let studentsSection = ['a', 'b', 'c'];

// let combined = studentsName.concat(studentsSection);
// console.log(combined);

// let roll = 30;
// let roll2 = String(roll);
// console.log(roll2);
// parseInt

// let roll = '30';
// let roll2 = String(roll);

// console.log(roll2);

// let roll = '30';
// let roll2 = Number(roll);

// console.log(roll2);
// let x = 2.289888;
// console.log(x);
// console.log(x.toFixed(3));
//
// while loop
// let number =12;
// while (number > 7) {
//   console.log("number is ",number);
//   number--;
// }

// for of loop
//
// let number = 10;
// while (number<100) {
//   console.log(number);
//   number
// }
//   console.log("kissu nai");
// let number = 100;
// while (number > 1) {
//   console.log(number);
//   number--;
// }
//
// let sum = 0;
// let number = 1;
// while (number < 10) {
//   console.log(number);
//   sum += number;
//   console.log(`sum=sum+number ${sum}`);
//   number++

// }

// let str = 'Mississippi';
// console.log(str.indexOf('i',5));

// // 1) Count up from 1 to 5
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // 2) Count down from 5 to 1
// let j = 5;
// while (j >= 1) {
//   console.log(j);
//   j--;
// }
// // 3) Sum numbers 1..10
// let sum = 0;
// let k = 1;
// while (k <= 10) {
//   sum += k;
//   k++;
// }
// console.log('Sum:', sum);


// // 4) Loop until a condition is met
// let num = 1;
// while (num < 100) {
//   num *= 2;
// }
// console.log("First power of 2 >= 100:", num);

// let n1 = 1;
// let total1 = 0;
// while (n1 <= 5) {
//   total1 += n1 * n1;
//   n1++;
// }
// console.log("Sum of squares 1..5:", total1);

// let n2 = 1;
// let factorial = 1;
// while (n2 <= 5) {
//   factorial *= n2;
//   n2++;
// }
// console.log("Factorial 5:", factorial);
/*

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// let number = 1;
// while (number <= 200) {
//   console.log(number);
//   if (number == 100) {
//     break;
//   }
//   number++;
// }
/*
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let number = 1;
// let sum = 0;
// while (number <= 100) {
//   sum += number;
//   if (sum >= 100) {
//     break;
//   }
//   number++;
// }
// console.log("Sum:", sum);
/*
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// let number = 1;
// let sum = 0;

// while (number <= 100) {

//   sum = sum + number;

//   if(sum)

//   let i = 1;

//   if( )


//   while (i * i <= number) {
//     if (i * i === number) {
//       isSquare = true;
//       break;
//     }
//     i++;
//   }


//   if (number > 1 && isSquare) {
//     console.log('First square:', number);
//     break;
//   }

//   number++;
// }
// console.log(number);
/*
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
// */
// let n = 2;
// while (n <= 100) {
//   let i = 2;
//   while (i * i < n) i++;
//   if (i * i === n) {
//     console.log(n);
//     console.log("perfect square", n);
//   }
//   n++;
//   console.log(n);
// }
/***

Implement a countdown timer that counts down from 21 to 15. using for loop

 */


/*programming hero*/
// for (let i = 21; i >= 15; i--){
//   console.log(i);
// }
// using while loop
// let number = 21;
// while (number >= 15) {
//   console.log(number);
//   number--
// }

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
// let i = 1;
// while (i <= 60) {
//   console.log(i,'I will invest at least 6 hrs every single day for next 60 days!');
//   i++;
// }
// for (let i = 1; i <= 30; i++){
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0 || i%2===0) {
    console.log(i);
  }
}
