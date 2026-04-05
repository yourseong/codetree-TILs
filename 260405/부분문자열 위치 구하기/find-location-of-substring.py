input_str = input()
target_str = input()

# 목적 문자열이 부분 문자열로 존재하는 경우, 부분 문자열의 시작 인덱스 출력

# input_str 안에 target_str이 있으면 target의 시작 인덱스 출력

for i in range(len(input_str) + 1):
    if input_str[i:len(target_str) + 1] == target_str:
        print(i)
        break
if target_str not in input_str:
    print(-1)