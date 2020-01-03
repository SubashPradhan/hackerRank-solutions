// Link to the problem
// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  const resultHourGlass = []
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let sum = 0
      sum += arr[row][col]
      sum += arr[row][col + 1]
      sum += arr[row][col + 2]
      sum += arr[row + 1][col + 1]
      sum += arr[row + 2][col]
      sum += arr[row + 2][col + 1]
      sum += arr[row + 2][col + 2]
      resultHourGlass.push(sum)
    }
  }
  return Math.max(...resultHourGlass)
}

const hourGlassArray = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
console.log(hourglassSum(hourGlassArray))
