# 3행 3열 배열 두 개

# arr_2d_1st = [0 for _ in range(3) for _ in range (3)]
# arr_2d_2nd = [0 for _ in range(3) for _ in range (3)]

# 첫 번째 배열
arr_1d = []
arr_2d = []

for i in range(3):
    arr_1d = list(map(int, input().split()))
    arr_2d.append(arr_1d)

a = input()

# 두 번째 배열
arr_1d_2nd = []
arr_2d_2nd = []
for i in range(3):
    arr_1d_2nd = list(map(int, input().split()))
    arr_2d_2nd.append(arr_1d_2nd)

temp = 0
# [0][0] * [0][0]
# [0][1] * [0][1]
# [0][2] * [0][2]

# [1][0] * [1][0]
# ...
for i in range(3):
    for j in range(3):
        temp = arr_2d[i][j] * arr_2d_2nd[i][j]
        print(temp, end = " ")
    print()

