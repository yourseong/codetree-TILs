n = int(input())
nums = list(map(int, input().split()))
even_arr = []

for i in range(n):
    if (nums[i] % 2 == 0):
        even_arr.append(nums[i])

even_arr.reverse()

print(*even_arr)
