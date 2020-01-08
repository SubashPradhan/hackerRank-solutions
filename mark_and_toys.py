# Link to the problem
# https://www.hackerrank.com/challenges/mark-and-toys/problem

# 1+2+3 = 6 / 3+4 =7 in this case is maximum toys is 3

def maximumToys(prices, k):
  prices.sort()
  i = 0
  while k > 0 and i < len(prices):
    k -= prices[i]
    i += 1
  return i - 1

prices = [1, 2, 3, 4, 5]
k = 7

print(maximumToys(prices, k))
