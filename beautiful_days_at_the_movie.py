# Link to the problem
# https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

def beautifulDays(i, j, k):
  count = 0
  for days in range(i, j+1):
    reversedDays = str(days)[::-1]
    if (int(reversedDays) - days) % k == 0:
      count += 1
  return count    


i = 49860
j = 205494
k = 155635764
print(beautifulDays(i,j,k))