nums = list(map(int, input().split()))

cnt = 0
total = 0

for i in range(len(nums)):
    if (nums[i] == 0):
        break
    if (nums[i] % 2 == 0):
        cnt += 1
        total += nums[i]

print(cnt, total)
