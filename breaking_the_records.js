// Link to the problem
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  const result = []
  let best = 0
  let worst = 0
  let bestScore = scores[0]
  let worstScore = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if (bestScore < scores[i]) {
      bestScore = scores[i]
      best++
    }
    if (worstScore > scores[i]) {
      worstScore = scores[i]
      worst++
    }
  }
  result.push(best, worst)
  return result
}

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
console.log("Records", breakingRecords(scores))
