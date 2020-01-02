// Link to the problem
// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let diagonalSumOne = 0
  let diagonalSumTwo = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diagonalSumOne += arr[i][j]
      }
      if ((i + j) === (arr.length - 1)) {
        diagonalSumTwo += arr[i][j]
      }
    }
  }
  return Math.abs(diagonalSumOne - diagonalSumTwo)
}

const diagonalArray = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]
console.log(diagonalDifference(diagonalArray))

