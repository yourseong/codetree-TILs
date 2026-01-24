word = ['L', 'E', 'B', 'R', 'O', 'S']

c = input();

# c가 주어지면 문자 위치 출력

if c in word:
    print(word.index(c))
else:
    print(None)
