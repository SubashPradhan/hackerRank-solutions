// Link to the problem
// https://www.hackerrank.com/challenges/mini-max-sum/problem

function maxMinSum(arr) {
  const maxInteger = Math.max(...arr)
  const minInteger = Math.min(...arr)
  let minSum = 0
  let maxSum = 0
  let totalSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxInteger) {
      minSum += arr[i]
    }
    if (arr[i] !== minInteger) {
      maxSum += arr[i]
    }
    if (maxInteger === minInteger) {
      totalSum += arr[i]
      minSum = maxSum = totalSum - arr[i]
    }
  }
  return (([minSum, maxSum]).join(' '))
}

const maxMinArray = [1, 2, 3, 4, 5]
console.log(maxMinSum(maxMinArray))