nums = list(map(int, input().split()))

# 500 미만의 수 중 가장 큰 수
# 500 초과의 수 중 가장 작은 수 출력하기

under_500 = []
over_500 = []

for num in nums:
    if num < 500:
        under_500.append(num)
    else:
        over_500.append(num)
        
print(max(under_500), min(over_500))