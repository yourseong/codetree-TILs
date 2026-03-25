# 두 개의 단어가 주어지면 길이가 더 긴 단어와 길이를 출력

c = input().split(" ")

if (len(c[0]) > len(c[1])):
    print(c[0], len(c[0]))
elif (len(c[0]) > len(c[1])):
    print(c[1], len(c[1]))
else:
    print("same")