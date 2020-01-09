# Link to the problem
# https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings&h_r=next-challenge&h_v=zen

def alternatingCharacters(s):
  count = 0 
  i = 0
  while i < len(s) - 1:
    if s[i] == s[i+1]:
      count += 1
    i += 1
  return count
  
string = 'AAABBBAAABB'
print(alternatingCharacters(string))
