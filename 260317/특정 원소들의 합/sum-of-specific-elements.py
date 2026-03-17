# 리스트 컴프리헨션으로 2차원 행렬 만들기

arr_2dim = [
    list(map(int, input().split()))
    for _ in range(4)
]

total = 0
total_list = []

for i in range(4):
    total = sum(arr_2dim[i][:i+1])
    total_list.append(total)

print(sum(total_list))