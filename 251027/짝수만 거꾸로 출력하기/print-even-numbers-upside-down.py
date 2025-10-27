n = int(input())
arr = list(map(int, input().split()))

newarr = []

for i in range (n):
    if arr[i] % 2 == 0:
        newarr.append(arr[i])

newarr.reverse()

for j in range (len(newarr)):
    print(newarr[j], end = " ")