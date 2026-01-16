arr = list(map(int, input().split()))

# 홀수번째 입력받은 정수 합 vs. 짝수번재 입력받은 정수 합
# 이 중에서 큰 수 - 작은 수

odds = 0
evens = 0

for i in range (len(arr)):
    if (i+1) % 2 == 0:
        odds += arr[i]
    else:
        evens += arr[i]

if odds > evens:
    print(odds - evens)
else:
    print(evens - odds)