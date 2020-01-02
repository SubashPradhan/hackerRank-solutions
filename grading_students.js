// Link to the problem
// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  const newGrades = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades.push(grades[i])
    }
    else if (grades[i] > 38 && (grades[i] % 5) === 0) {
      newGrades.push(grades[i])
    }
    else if ((grades[i] % 5 > 2)) {
      grades[i]++
      i = i - 1
    }
    else {
      newGrades.push(grades[i])
    }
  }
  return newGrades
}

const grades = [73, 67, 38, 33]
console.log(gradingStudents(grades))
