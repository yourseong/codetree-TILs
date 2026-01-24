'''
3 3 # 두 정수 n과 q
1 8 5 # n_list
1 1 # 여기부터 질의 (q_list)
2 5 # n_list 중에 값이 5인 원소를 찾아 
3 1 2
'''

'''
케이스를 1, 2, 3 으로 나눠서
if 1 in 
'''

# n개 원소 q개 질의
# 첫 줄에 n, q 주어짐
n, q = tuple(map(int, input().split()))

# 그 다음 줄에 n개의 원소 값이 차례대로 공백으로 구분되어 주어짐
n_list = list(map(int, input().split()))
q_list = [] # query 리스트

# 그 다음 줄부터 Q개의 줄에 걸쳐 Q개의 질의가 한 줄에 하나씩 주어짐
for i in range(q): # 이 중 i번째 줄에는 i번째 질의가 문제에 주어진 것과 동일한 형식으로 주어짐
    q_elem = list(map(int, input().split()))
    q_list.append(q_elem)

# 쿼리 리스트
# [[1, 1], [2, 5], [3, 1, 2]]
# print(q_list[1][1])

# 쿼리 형식에 따라 케이스 분리
for i in range(len(q_list)): # 쿼리 리스트 순회
    if q_list[i][0] == 1: # 1 a
        print(n_list[q_list[i][1] - 1]) # n_list에서 a번째 원소 출력
    elif q_list[i][0] == 2: # 2 b
        if q_list[i][1] in n_list: # b가 n_list에 있으면
            print(n_list.index(q_list[i][1]) + 1) # n_list중에 값이 b인 원소를 찾아서 그 원소가 몇 번째 원소인지 출력
        else: # 없다면 0
            print(0)
    elif q_list[i][0] == 3: # 3 s e
        print(*n_list[q_list[i][1]-1:q_list[i][2]])    # s번째 원소부터 e번째 원소까지 각 원소의 값을 공백으로 구분해 출력