str_input = input().split(" ")

str = str_input[0]
c = str_input[1]

isExists = False
# 주어진 문자의 위치를 출력

if c not in str:
    print("No")

for i in range(len(str) - 1):
    if str[i] == c:
        print(i)
        break