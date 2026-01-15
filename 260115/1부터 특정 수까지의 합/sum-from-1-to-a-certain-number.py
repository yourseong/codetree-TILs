n = int(input())

# 1부터 n까지 합을 10으로 나누기

def solution(n):
    total = 0
    for i in range(n+1):
        total += i
    return total // 10

print(solution(n))