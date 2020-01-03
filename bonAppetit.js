// Link to the problem
// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  let totalBillinclusive = 0
  let sharableAmount = 0
  for (let i = 0; i < bill.length; i++) {
    totalBillinclusive += bill[i]
  }
  sharableAmount = (totalBillinclusive - bill[k]) / 2
  if (sharableAmount === b) {
    console.log('Bon Appetit')
  } else {
    console.log(Math.abs(sharableAmount - b))
  }
}

const bill = [3, 10, 2, 9]
console.log(bonAppetit(bill, 1, 7))
