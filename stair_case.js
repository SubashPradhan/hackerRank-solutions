// Link to the problem
// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let starArray = ''
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      starArray += ' '
    }
    for (let k = 1; k <= i; k++) {
      starArray += '#'
    }
    starArray += '\n'
  }
  return starArray
}

console.log(staircase(5))
