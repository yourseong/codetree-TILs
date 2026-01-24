# # 첫 번째 줄 : N_1, N_2
# n1, n2 = tuple(map(int, input().split()))

# # 두 번째 줄 : 수열 A (원소 n1개)
# A_list = list(map(int, input().split()))

# # 세 번째 줄 : 수열 B (원소 n2개)
# B_list = list(map(int, input().split()))

# # B가 A의 연속부분수열인지 판단
# # A를 순회해서 B 연속으로 들어있는지 확인하면 여부에 따라 Yes, No 출력

# if B_list in A_list:
#     print("Yes")
# else:
#     print("No")

n1, n2 = tuple(map(int, input().split()))
A_list = input()
B_list = input()

if B_list in A_list:
    print("Yes")
else:
    print("No")