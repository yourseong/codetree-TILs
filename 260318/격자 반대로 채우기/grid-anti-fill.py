n = int(input())

arr = [[0 for _ in range(n)] for _ in range(n)]

# 오른쪽 아래부터 위로..

# n = 4라면
# 33 23 13 03
# 02 12 22 32
# 31 21 11 01
# 00 10 20 30

# 전체적으로
# 오른쪽 숫자 고정
# 왼쪽 숫자 감소 > 증가 > 감소
# 짝수 행일 때 감소
# 홀수 행일 때 증가

num = 1

# 3 2 1 0
for j in range(n-1, -1, -1):
    # if j % 2 != 0: # 이렇게 쓰면 입력값이 짝수, 홀수냐에 따라 스네이크 방식이 달라짐
    if (n-1 - j) % 2 == 0:
        for i in range(n-1, -1, -1): # 
            arr[i][j] = num
            num += 1
    else:
        for i in range(n):
            arr[i][j] = num
            num += 1

for row in arr:
    for elem in row:
        print(elem, end = " ")
    print()