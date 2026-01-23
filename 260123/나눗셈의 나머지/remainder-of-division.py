# 두 정수가 주어짐
nums = list(map(int, input().split()))
a = nums[0]
b = nums[1]

# A를 B로 나눈 몫을 A에 계속 저장
# 나눗셈 회차마자 나머지들이 등장한 횟수를 제곱해서 더하기

cnt = 0
cnt_list = [0] * 10 # 나머지 세는거
devided_list = [] # 나눈 결과들 저장

while(a > 1): # A가 1보다 작아지면 종료
    a //= b
    mod = a % b
    devided_list.append(mod)

for elem in devided_list:
    cnt_list[elem] += 1

new_arr = [num**2 for num in cnt_list]
print(sum(new_arr))