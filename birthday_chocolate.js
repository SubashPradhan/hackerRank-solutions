// Link to the problem
// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let share = 0
    for (let j = 0; j < m; j++) {
      share += s[j + i]
    }
    
    if (share === d) {
      count++
    }
  }
  return count
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
