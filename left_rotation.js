// Link to the problem
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, timesOfRotation) {
  let arr = []
  let n = a.length
  for (let i = 0; i < n; i++) {
    const newIndex = (i + n - timesOfRotation) % n
    arr[newIndex] = a[i]
  }
  return arr
}

const array = [1, 2, 3, 4, 5]
const numberOfTimes = 4
console.log(rotLeft(array, numberOfTimes))