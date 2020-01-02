// Link to the problem
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  const tallestCandle = Math.max(...ar)
  let totalCandles = 0
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === tallestCandle) {
      totalCandles++
    }
  }
  return totalCandles
}

tallestArray = [1, 2, 3, 1, 3, 1, 3]
console.log(birthdayCakeCandles(tallestArray))
