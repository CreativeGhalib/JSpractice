// 1. store a name in localStorage
localStorage.setItem('name', 'Rahim');

// 2. get the name from localStorage
let name = localStorage.getItem('name');
console.log(name);

// 3. delete the name from localStorage
localStorage.removeItem('name');

// 4. store a number in localStorage
localStorage.setItem('age', 25);

// 5. get the age and convert it to a number
let age = Number(localStorage.getItem('age'));
console.log(age, typeof age);

// 6. store an object in localStorage
let user = { name: 'Karim', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// 7. get the object back from localStorage
let storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);

// 8. clear everything from localStorage
localStorage.clear();
