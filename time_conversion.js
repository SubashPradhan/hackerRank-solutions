// Link to the problem
// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(d) {
  let newTime = d.slice(0, d.length - 2)
  const timeArray = newTime.split(':')
  let hour = Number(timeArray[0])

  if (d.includes('AM') && hour < 11) {
    return newTime
  }
  else if (d.includes('AM') && hour > 11) {
    let newHour = hour - 12
    timeArray.shift()
    timeArray.unshift(`0${newHour}`)
    newTime = timeArray.join(':')
  }
  else if (d.includes('PM') && hour <= 11) {
    let newHour = hour + 12
    timeArray.shift()
    timeArray.unshift(newHour)
    newTime = timeArray.join(':')
  }
  return newTime
}


const date = '09:20:20PM'
const otherDate = '11:10:00PM'
console.log(timeConversion(date))
