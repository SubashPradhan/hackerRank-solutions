// Link to the problem
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  const finalDistance = 10000
  if ((x2 >= x1) && (v2 >= v1)) {
    return "NO"
  }
  for (let i = 0; i <= finalDistance; i++) {
    x1 += v1
    x2 += v2
    if (x1 === x2) {
      return "YES"
    }
  }
  return "NO"
}

console.log(kangaroo(0, 3, 4, 2))
