# 첫 번재 줄에 세 자리 이하의 정수가 입력됨
# 단, 999나 -999는 반드세 세 번째 이후부터 주어짐. 
# 가장 끝으로 주어지는 수는 항상 999 or -999

# 999나 -999가 주어지면 입력 종료
# 그리고 이 수를 제외한 수 중 가장 큰 수와 가장 작은 수 출력

nums = list(map(int, input().split()))

temp_large = nums[0]
temp_small = nums[0]

for i in range(len(nums)-1):
    if nums[i] == 999 or nums[i] == -999:
        break
    if temp_large < nums[i]:
        temp_large = nums[i]
    elif temp_small > nums[i]:
        temp_small = nums[i]

print(temp_large, temp_small)
