# Link to the problem
# https://www.hackerrank.com/challenges/crush/problem

def arrayManipulation(n, queryArray):
  diffArray = [0 for i in range(n+1)]
  for i in queryArray:
    a = i[0]-1
    b = i[1]
    k = i [2]
    diffArray[a] +=  k
    diffArray[b] -= k
  maximum = 0
  sum = 0
  for i in diffArray:
    sum += i
    if sum > maximum:
      maximum = sum
  return maximum  

queryArray = [
  [1, 2, 100],  #[100, 100, 0, 0, 0]
  [2, 5, 100],  #[0, 100, 100, 100, 100]
  [3, 4, 100]
]
    
print(arrayManipulation(5, queryArray))