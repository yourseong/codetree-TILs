# 4줄에 걸쳐 4개의 정수가 주어진다
# 줄의 합 구하기
for i in range (4):
    arr = list(map(int, input().split()))
    sum_val = sum(arr)
    print(sum_val)
