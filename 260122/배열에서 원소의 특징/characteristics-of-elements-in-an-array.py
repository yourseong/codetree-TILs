# 3의 배수가 처음으로 등장하는 부분의 바로 앞 원소 출력

n = list(map(int, input().split()))

for i in range(10):
    if n[i] % 3 == 0:
        print(n[i-1])
        break
