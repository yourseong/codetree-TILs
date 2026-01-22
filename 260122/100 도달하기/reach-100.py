n = int(input())

arr = [1, n]

# arr.append() 하다가 100넘기면 멈춤

i = 0

while(1):
    i += 1
    if (arr[i] > 100):
        break
    arr.append(arr[-1] + arr[-2])
    
print(*arr)