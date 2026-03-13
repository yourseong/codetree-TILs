n = int(input())
nums = list(map(int, input().split())) # n개의 정수가 오름차순으로 주어짐

# nums중 서로 다른 두 개의 정수를 골랐을 때
# 두 정수의 차가 최소가 되는 경우, 그 차이를 출력

# 현재 수 - 다음 수
# 결과가 작은 값 업데이트
# 오름차순 배열에서는 항상 인접한 수 차이가 제일 작음

# min_diff = 9999999 이런식으로 하는것보다는 아래 방법이 더 나음

min_diff = arr[1] - arr[0] # 첫 번째 값을 맨 앞 두 인덱스의 차로 설정

# for i in range(n-1): # 범위를 (2, n)으로 하는게 좋음. (0, 1번째 인덱스 연산 결과는 이미 나왔으니)
    # diff = nums[i+1] - nums[i] # 인접한 숫자끼리 빼는데
    # if min_diff > diff: # 더 작은 값이 나타난다면
        # min_diff = diff

for i in range(2,n):
    if min_diff > nums[i] - nums[i - 1]: # 더 작은 값이 나타난다면
        min_diff = nums[i] - nums[i - 1]

print(min_diff)