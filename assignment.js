function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number)

    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;

  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}
const numbers = [1, 2, 3, 4, 6];
const avg = oddAverage(numbers);
console.log('average of odd numbers is', avg);
