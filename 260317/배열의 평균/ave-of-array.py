# 2행 4열 배열

sum_val = 0

horizon_list = [] # 가로 값을 더해 넣을 리스트
arr_2d = [] # 2차원 배열 담기

for i in range(2): #2행
    arr_1d = list(map(int, input().split())) # 첫 번째 열을 먼저 받고
    arr_2d.append(arr_1d)

print(sum(arr_2d[0])/4, sum(arr_2d[1])/4) # 가로 평균

# 세로 평균
# arr_2d 순회하면서 
for j in range(4):
    vertical_aveg = (arr_2d[0][j] + arr_2d[1][j])/2
    print(vertical_aveg, end = " ")
print("")
all_aveg = (sum(arr_2d[0]) + sum(arr_2d[1]))/8
print("{:.1f}".format(all_aveg)) # 전체 평균