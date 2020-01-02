let sumOfArray = 0
function simpleArraySum(ar) {
  for (let i = 0; i < ar.length; i++) {
    sumOfArray += ar[i]
  }
  return sumOfArray
}

let fs = [1, 2, 3, 4, 5]
console.log("SumOfArray", simpleArraySum(fs))
// Link to the problem
// https://www.hackerrank.com/challenges/simple-array-sum/problem