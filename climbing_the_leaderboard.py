# Link to the problem
# https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

def climbingLeaderboard(scores, player):
  scores = sorted(list(set(scores)))
  rank_list = []
  index = 0
  n = len(scores)
  for i in alice:
    while n > index and i >= scores[index]:
      index += 1
    rank_list.append(n+1-index)  # example==>5+1-0 = 6
  print(rank_list)
  
scores = [100,100,50,40,40,20,10]
alice = [5,25,50,120]
  
print(climbingLeaderboard(scores,alice))

# n+1 - index