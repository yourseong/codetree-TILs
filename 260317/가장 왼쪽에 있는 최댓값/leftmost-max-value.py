n = int(input())
nums = list(map(int, input().split()))

# 핵심 : 인덱스 줄여나가기
end_index = n
max_index = 0

# 최댓값이 여러개라면 가장 왼쪽에 있는 최댓값의 위치 출력
# 그 이후에는
# 위에서 구한 최댓값의 위치보다 더 왼쪽에 있는 정수들 중 최댓값 구하기

# 마지막에 무조건 1이 나와야 하는 이유는
# 리스트가 계속 줄어들면서 결국 마지막 위치는 1이 되기 때문
while(end_index > 0):
    max_index = nums[:end_index].index(max(nums[:end_index]))
    print(max_index + 1, end = " ")
    end_index = max_index