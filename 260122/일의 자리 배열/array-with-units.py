# 10 미만의 정수 두 개
arr = list(map(int, input().split()))

# n = arr[0], m = arr[1]

# 세 번째 항부터는 전전항과 전항의 합 구해서

for i in range(8):
    arr.append((arr[-1]+arr[-2])%10)

print(*arr)