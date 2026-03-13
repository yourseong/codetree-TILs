n = int(input())
a = list(map(int, input().split()))

# 최댓값의 위치 출력
max_value = max(a)
max_value2 = 0

# 최댓값이 여러개라면 가장 왼쪽에 있는 최댓값의 위치 출력

# 그 이후에는
# 위에서 구한 최댓값의 위치보다 더 왼쪽에 있는 정수들 중 최댓값 구하기
for i in range(0, a.index(max_value)+1):
    if a[i] > max_value2:
        max_value2 = a[i]

print(a.index(max_value)+1, a.index(max_value2)-1)


