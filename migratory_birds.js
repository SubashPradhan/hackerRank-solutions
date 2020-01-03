// Link to the problem
// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  let birdsCount = []
  for (let i = 0; i < arr.length; i++) {
    if (birdsCount[arr[i]]) {
      birdsCount[arr[i]]++
    } else {
      birdsCount[arr[i]] = 1
    }
  }
  let maxBird = 0
  let maxBirdCount = 0
  for (let j = 0; j < arr.length; j++) {
    if (birdsCount[arr[j]] >= maxBirdCount) {
      maxBirdCount = birdsCount[arr[j]]
      maxBird = arr[j]
    }
  }
  return maxBird
}

const birds = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 1]
console.log(migratoryBirds(birds))