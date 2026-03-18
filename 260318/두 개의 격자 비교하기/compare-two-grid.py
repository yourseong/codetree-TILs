# 2차원 격자 두 개

n, m = tuple(map(int, input().split()))

# 첫 번째 격자
row1 = []
col1 = []

for i in range(n):
    row1 = list(map(int, input().split()))
    col1.append(row1)

# 두 번째 격자
row2 = []
col2 = []

for i in range(n):
    row2 = list(map(int, input().split()))
    col2.append(row2)

# 새로운 격자
new_arr = [[0 for _ in range(m)] for _ in range(n)]

for i in range(n):
    for j in range(m):
        if col1[i][j] == col2[i][j]:
            new_arr[i][j] = 0
        else:
            new_arr[i][j] = 1
        print(new_arr[i][j], end = " ")
    print()