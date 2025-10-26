n = int(input())
arr = list(map(int, input().split(" ")))

newarr = []

for i in range(n):
    newarr.append(arr[i] ** 2)
    print(newarr[i], end=" ")
