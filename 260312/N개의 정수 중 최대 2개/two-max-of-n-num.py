n = int(input())
a = list(map(int, input().split()))

# Please write your code here.

# 내림차순 정렬 후 첫 번째와 두 번째 정수 출력
a.sort()
print(a[-1], a[-2])
