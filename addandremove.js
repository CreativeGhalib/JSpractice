const friends = ['Alice', 'Bob', 'Charlie'];
friends.push("MESBAH");
console.log(friends);
const removedFriend = friends.pop();
console.log(`removedFriend: ${removedFriend}`);
const firstFriend = friends.shift()
console.log(friends);
console.log(firstFriend);
const newFriendCount = friends.unshift("MESBAH");
console.log(newFriendCount);
console.log(friends);
console.log(friends.indexOf("Bob"));
console.log(friends.includes('Bob'));
length=friends[2].length;
console.log(`Lenth is ${length}`);
let a='Hello';
console.log(a.length);
let b = 'hello';
// Use of uppercase and lower case
if (a.toLowerCase() === b.toLowerCase()) {
  console.log("value is same");
} else {
  console.log("Value not same");
}
console.log(friends.indexOf("MESBAH")
);
console.log(friends);
console.log(friends.indexOf("Bob"));
let newwfrnd = friends.map(f => f.toLowerCase());
console.log(newwfrnd);

console.log(Array.isArray(friends));
const joinedFriends = friends.join('|');
console.log(joinedFriends);

// concat/join
const moreFriends = ['David', 'Eve'];
const allFriends = friends.concat(moreFriends);
console.log(allFriends);


