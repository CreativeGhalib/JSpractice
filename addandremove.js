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
