// Link to the problem
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let count = 0
  for (let i = 0; i < n; i++) {
    let recent = ar[i]
    for (let j = i + 1; j < n; j++) {
      if ((recent + ar[j]) % k === 0) {
        count++
      }
    }
  }
  return count
}

const array = [1, 3, 2, 6, 1, 2]
const length = 6
const k = 3
console.log(divisibleSumPairs(length, k, array ))
