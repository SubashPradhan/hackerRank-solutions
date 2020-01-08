# Link to tthe problem
# https://www.hackerrank.com/challenges/angry-professor/problem

def angryProfessor(k, a):
  count = 0
  for time in a:
    if time <= 0:
      count += 1
  if count >= k:
    return "NO"
  return "YES"

total = 3
times = [-1,-3,4,2]
print(angryProfessor(total, times))