# 두 정수가 주어짐
nums = list(map(int, input().split()))
a = nums[0]
b = nums[1]

# A를 B로 나눈 몫을 A에 계속 저장
# 나눗셈 회차마자 나머지들이 등장한 횟수를 제곱해서 더하기

cnt = 0
cnt_list = [0] * 10 # 나머지 세는거
mod_list = [] # 나머지들 저장

while(a > 1): # A가 1보다 작아지면 종료 (등호로 표시하면 1보다 작을때도 포함하므로 부등호로 해야함)
    mod = a % b # 나머지 구하기
    # print(mod)
    a //= b # 나눈 결과 저장
    # print(a)
    mod_list.append(mod) # 나머지 리스트에 나머지들 추가

# print(mod_list)

for elem in mod_list: # 나마지 리스트에서 
    cnt_list[elem] += 1 # 등장 횟수 세기

new_arr = [num**2 for num in cnt_list] # 각 요소들 제곱 후
print(sum(new_arr)) # 더한 결과 저장