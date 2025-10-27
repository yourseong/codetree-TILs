# 리스트 컴프리헨션 : [표현식 for 변수 in range(n) if]

nums = [int(input()) for _ in range(10)]
cnt3 = 0
cnt5 = 0

for i in range(10):
    if nums[i] % 3 == 0:
        cnt3 += 1
    if nums[i] % 5 == 0:
        cnt5 += 1
    else:
        continue

print(cnt3, cnt5)