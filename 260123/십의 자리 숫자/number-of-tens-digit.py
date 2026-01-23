# 0이 주어지면 그 0을 제와하고 그 떄까지 입력된 정수의 숫자들의
# 십의 자리 숫자가 각각 몇 개인지 작은 수부터 출력

count_list = [0] * 10 # 십의자리 숫자sms 1 ~ 9까지 이므로 10까지만 필요
arr = list(map(int, input().split())) # 입력받는 숫자들

for elem in arr: # arr 순회해서
    if elem == 0: # 0 이면 
        break # 종료 (0 미포함하기위함)
    elem //= 10 # 몫만 저장 
    count_list[elem] += 1 # 카운트 +1

for i in range(1, 10):
    print(f"{i} - {count_list[i]}")