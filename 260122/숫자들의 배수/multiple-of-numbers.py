n = int(input())
arr = []

# 정수 한 개 입력받아 배수 차례로 출력하다가
i = 1

cnt = 0

while(1):
    value = i * n
    arr.append(value)
    
    i += 1

    if value % 5 == 0:
        cnt += 1

    if cnt == 2:
        break

print(*arr)

