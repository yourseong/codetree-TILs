# 500 이하 정수가 10번 주어짐
# 만약 250이상의 정수가 주어지면 마지막으로 주어진 수를 제외하고 모든 수의 합계와 평균을 구해보기

# 250이 입력되면 입력을 멈춤

arr = list(map(int, input().split()))
newarr = list([])
total = 0

for i in range(len(arr)):
    newarr.append(arr[i])
    if arr[i] >= 250:
        break
    total += arr[i]

aveg = total / (len(newarr) -1)

print(total, f"{aveg:.1f}")