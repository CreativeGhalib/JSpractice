// =============================================
// BEGINNER OBJECT PROBLEM
// =============================================

/*
PROBLEM: Student Grade Calculator

Create a student object with the following properties:
- name (string)
- age (number)
- subjects (an object containing subject names as keys and scores as values)

Then write functions to:
1. Calculate the student's average score
2. Find the highest scoring subject
3. Check if the student passed (average >= 50)
*/

// =============================================
// SOLUTION
// =============================================

// Step 1: Create the student object
const student = {
  name: 'Alex Johnson',
  age: 16,
  subjects: {
    math: 85,
    english: 72,
    science: 90,
    history: 68,
    art: 95,
  },
};

// Step 2: Function to calculate average score
function calculateAverage(student) {
  const scores = Object.values(student.subjects);
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Step 3: Function to find highest scoring subject
function findHighestSubject(student) {
  let highestSubject = '';
  let highestScore = 0;

  for (let subject in student.subjects) {
    if (student.subjects[subject] > highestScore) {
      highestScore = student.subjects[subject];
      highestSubject = subject;
    }
  }

  return { subject: highestSubject, score: highestScore };
}

// Step 4: Function to check if student passed
function hasPassed(student) {
  const average = calculateAverage(student);
  return average >= 50;
}

// TESTING THE SOLUTION
// =============================================

console.log('Student Name:', student.name);
console.log('Student Age:', student.age);
console.log('Subjects:', student.subjects);
console.log('----------------------------');

const average = calculateAverage(student);
console.log('Average Score:', average.toFixed(2));

const highest = findHighestSubject(student);
console.log('Highest Subject:', highest.subject, 'with score', highest.score);

const passed = hasPassed(student);
console.log('Passed:', passed ? 'Yes! ✓' : 'No ✗');
