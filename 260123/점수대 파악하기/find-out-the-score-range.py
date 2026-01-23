#

arr = list(map(int, input().split()))
count_list = [0] * 11

for elem in arr:
    if elem == 0: # 0 주어지면
        break # 종료
    if elem > 10: # 10점 이상인 학생만 카운트
        elem //= 10
        count_list[elem] += 1

for i in range(10, 0, -1):  
    print(f"{i * 10} - {count_list[i]}")

