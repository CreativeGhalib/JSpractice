// // *Task-1:
// // *Count how many times a string has the letter a;
let string = "i am learning web development from programming-hero";
let newString=string.toLowerCase(string)
let count = 0;
for (const letter of newString) {
  if (letter === 'a') {
    count++;
  }
}
console.log(`a has  appeared ${count} times `);
console.log(newString);

// Task-2:
// Count how many times a string has the letter a or A


let string = "Adnan is a businessman";
let count = 0;
let countCapital = 0;
for (const letter of string) {
  if (letter === "a") { count++ }
  else if(letter==="A"){countCapital++}

}
console.log(count);
console.log(countCapital);
