n, m = list(map(int, input().split()))

arr_1dim = []
num = 1 # 1부터 계속 증가시키기

for i in range(n):
    arr_2dim = []
    for j in range(m):
        arr_2dim.append(num)
        num += 1
    arr_1dim.append(arr_2dim)
    print(*arr_1dim[i])