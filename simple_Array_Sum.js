// Link to the problem
// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  let sumOfArray = 0
  for (let i = 0; i < ar.length; i++) {
    sumOfArray += ar[i]
  }
  return sumOfArray
}

const array = [1, 2, 3, 4, 5]
console.log(simpleArraySum(array))
