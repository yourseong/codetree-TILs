nums = list(map(int, input().split()))

total = 0
aveg = 0
cnt = 0

for i in range(10):
    if nums[i] == 0:
        break
    total += nums[i]
    cnt += 1

aveg = round(total / cnt, 1)
print(total, aveg)