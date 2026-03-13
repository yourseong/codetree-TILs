# n개의 정수 주어질 때 중복하여 등장하지 않는 정수 중 최댓값 구하기
# 원소의 수
n = int(input())
nums = list(map(int, input().split()))

# Please write your code here

max_value = -1

for i in range(n):
    if nums.count(nums[i]) == 1: # 중복이 아니고
        if nums[i] > max_value: # 최댓값 찾기
            max_value = nums[i]

print(max_value)
