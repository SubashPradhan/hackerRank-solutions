# Link to the problem
# https://www.hackerrank.com/challenges/electronics-shop/problem

def getMoneySpent(keyboards, drives, b):
  keyboards.sort()
  drives.sort()
  ans = -1
  for i in keyboards:
    for j in drives:
      if (i + j) > b:
        break
      ans = max(ans, i+j)
  return ans

keyboards = [3, 1, 2, 3]
drives = [5, 2, 8, 7]
budget = 10

print(getMoneySpent(keyboards, drives, budget))