n, m = map(int, input().split())

arr = [[0 for _ in range(m)] for _ in range(n)]

num = 0

# 00 10 20 30 11 21 31 41

for j in range(m):
    for i in range(n):
        if j % 2 == 0:
            arr[i][j] = num
        else:
            arr[n-1-i][j] = num
        num += 1

for row in arr:
    for elem in row:
        print(elem, end = " ")
    print()