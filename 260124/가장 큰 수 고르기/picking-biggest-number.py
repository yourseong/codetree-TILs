nums = list(map(int, input().split()))

# max() 사용하지 않고 직접 구현

max_size = nums[0]

for num in nums[1:]:
    if num > max_size:
        max_size = num

print(max_size)