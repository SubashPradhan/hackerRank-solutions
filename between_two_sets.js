// Link to the problem
// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  let validCount = 0;
  for (let x = 1; x <= 100; x++) {
    if (a.every(int => (x % int == 0))) {
      if (b.every(int => (int % x == 0))) {
        validCount++;
      }
    }
  }
  return validCount;
}

const firstArray = [2, 4]
const secondArray = [16, 32, 96]
console.log(getTotalX(firstArray, secondArray))