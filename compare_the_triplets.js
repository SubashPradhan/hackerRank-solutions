// Link to the problem
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  const array = [0, 0]
  const n = a.length
  for (let i = 0; i <= n; i++) {
    if (a[i] > b[i]) {
      array[0]++
    } else if (a[i] < b[i]) {
      array[1]++
    }
  }
  return array
}

const firstArray = [17, 28, 30]
const secondArray = [99, 16, 8]
console.log(compareTriplets(firstArray, secondArray))