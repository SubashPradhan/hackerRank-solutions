//  Link to the problem
// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(ar) {
  let count = 0
  ar.sort()
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      count++
      i++
    }
  }
  return count
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(socks))