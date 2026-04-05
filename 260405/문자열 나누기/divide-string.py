# 다섯 개의 숫자씩 나누어서 출력   
n = int(input())
str = input().split(" ")
concat = ''.join(str)

for i in range(0, len(concat), 5):
    print(concat[i:i+5])