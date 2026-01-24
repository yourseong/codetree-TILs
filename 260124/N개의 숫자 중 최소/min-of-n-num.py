# min() 안쓰고 sys.maxsize 사용해보기

import sys

n = int(input())
nums = list(map(int, input().split()))

# Please write your code here.

min_val = sys.maxsize

for num in nums:
    if num < min_val:
        min_val = num

print(min_val, nums.count(min_val))
