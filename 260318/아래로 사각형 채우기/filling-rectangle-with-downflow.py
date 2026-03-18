n = int(input())

arr = [[0 for _ in range(n)] for _ in range(n)]

# [0][0] [1][0] [2][0] 1 2 3
# [0][1] [1][1] [2][1]
# [0][2] [1][2] [2][2]

num = 1

#    0 1 2
# 0  1 4 7
# 1  2 5 8
# 2  3 6 9

for i in range(n):
    for j in range(n):
        arr[j][i] = num
        num += 1

for row in arr:
    for elem in row:
        print(elem, end = " ")
    print()