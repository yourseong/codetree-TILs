# 정수가 주어짐

arr = list(map(int, input().split()))
result = []

for i in range(len(arr)):

    if arr[i] == 0:
        break
    if arr[i] % 2  == 1:
        arr[i] += 3
        result.append(arr[i])
    elif arr[i] > 0 and arr[i] % 2 == 0:
        arr[i] //= 2
        result.append(arr[i])

    
print(*result)