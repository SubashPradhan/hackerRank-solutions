// Link to the problem
// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
  let arr = []
  let result = []
  let n = a.length
  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n
    arr[newIndex] = a[i]
  }
  for (let i = 0; i < queries.length; i++) {
    result.push(arr[queries[i]])
  }
  return result
}

const a = [1, 2, 3]
const queries = [0, 1, 2]
const k = 2

console.log(circularArrayRotation(a, k, queries))

