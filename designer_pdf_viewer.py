# Link to the problem
# https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?h_r=next-challenge&h_v=zen

def designerPdfViewer(h, word):
  word = [h[ord(c)-ord('a')] for c in word]
  return max(word)*len(word)

height = [1,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5]
word = 'abc'
print(designerPdfViewer(height, word))