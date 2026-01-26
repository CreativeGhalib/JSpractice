const friends = ['Alice', 'Bob', 'Charlie'];
friends.push('MESBAH');
console.log(friends);
const removedFriend = friends.pop();
console.log(`removedFriend: ${removedFriend}`);
const firstFriend = friends.shift();
console.log(friends);
console.log(firstFriend);
const newFriendCount = friends.unshift('MESBAH');
console.log(newFriendCount);
console.log(friends);
console.log(friends.indexOf('Bob'));
console.log(friends.includes('Bob'));
length = friends[2].length;
console.log(`Lenth is ${length}`);
let a = 'Hello';
console.log(a.length);
let b = 'hello';
// Use of uppercase and lower case
if (a.toLowerCase() === b.toLowerCase()) {
  console.log('value is same');
} else {
  console.log('Value not same');
}
console.log(friends.indexOf('MESBAH'));
console.log(friends);
console.log(friends.indexOf('Bob'));
let newwfrnd = friends.map(f => f.toLowerCase());
console.log(newwfrnd);

console.log(Array.isArray(friends));
const joinedFriends = friends.join('|');
console.log(joinedFriends);

// concat/join
const moreFriends = ['David', 'Eve'];
const allFriends = friends.concat(moreFriends);
console.log(allFriends);
// slice
const someFriends = allFriends.slice(1, 4);
console.log(someFriends);
// splice
allFriends.splice(2, 1, 'Zara');
console.log(allFriends);

// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
//
let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
console.log(fruits);
console.log(fruits[3]);
// Findings: Index assignment (fruits[2] = ...) and splice() diye array element replace kora jai.
// Difference: splice() remove kora value return kore, index assignment kore na. Duto method-ei main array update hoy.
fruits[2] = 'jambura';
console.log(fruits);


// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
let tourisTdestinations = ['dhaka', 'sylhet', 'coxsbazar'];
tourisTdestinations.push('sundarban');
tourisTdestinations.push('bandarban', 'saintmartin');
let rejectedDestination = tourisTdestinations.pop();
console.log(tourisTdestinations);
console.log(`rejectedDestination: ${rejectedDestination}`);
