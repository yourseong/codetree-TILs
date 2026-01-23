# 0이 주어지면 그 0을 제와하고 그 떄까지 입력된 정수의 숫자들의
# 십의 자리 숫자가 각각 몇 개인지 작은 수부터 출력

count_list = [0] * 99
arr = list(map(int, input().split()))

for i in range(len(arr)):
    arr[i] //= 10

for elem in arr:
    count_list[elem] += 1

for i in range(1, 10):
    print(f"{i} - {count_list[i]}")