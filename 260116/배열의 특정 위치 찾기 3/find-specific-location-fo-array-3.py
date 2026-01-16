arr = list(map(int, input().split()))

# 0이 주어지면 처음으로 주어진 0에 대하여
# 앞의 3개 수 더해서 출력 (배열 활용)

total = 0

for i in range(len(arr)):
    if (arr[i] == 0):
        total = arr[i-1] + arr[i-2] + arr[i-3]
        break

print(total)