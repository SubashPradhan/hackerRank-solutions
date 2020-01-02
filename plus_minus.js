// Link to the problem
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const resultArray = []
  let totalPositiveInteger = 0
  let totalNegativeInteger = 0
  let totalZero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      totalPositiveInteger++
    }
    else if (arr[i] < 0) {
      totalNegativeInteger++
    }
    else {
      totalZero++
    }
  }
  const fractionPositive = (totalPositiveInteger / arr.length).toFixed(6)
  const fractionNegative = (totalNegativeInteger / arr.length).toFixed(6)
  const fractionZero = (totalZero / arr.length).toFixed(6)
  resultArray.push(fractionPositive, fractionNegative, fractionZero)
  return resultArray
}

const arrayPlusMinus = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arrayPlusMinus))
