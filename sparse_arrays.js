// Link to the problem
https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
  let totalCommon = []
  queries.forEach(query => {
      const match = strings.filter(string => string === query).length
      totalCommon.push(match)
  })
  return totalCommon
}   

const strings = ['aba', 'baba', 'aba', 'xzxb']
const queries = ['aba', 'xzxb', 'ab']
console.log(matchingStrings(strings, queries))


