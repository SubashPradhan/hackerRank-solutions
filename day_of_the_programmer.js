// Link to the problem
// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  let days = 0
  // condition leap year
  if ((year < 1918 && year % 4 === 0) || (year > 1918 && (year % 400 === 0) || (year % 4 === 0 && year % 100 > 0))) {
    days = 256 - 244
    return `${days}.09.${year}`
  }
  //Year when changed from julian to gregorian calendar
  else if (year === 1918) {
    return `26.09.1918`
  }
  // consition normal years
  else {
    days = 256 - 243
    return `${days}.09.${year}`
  }
}
console.log(dayOfProgrammer(2016))
