# 던질 때마다 나온 숫자가 주어지면 각 숫자가 몇 번씩 나왔는지 출력
# 1 이상 6 이의 결과가 10번 주어짐

count_nums = [0] * 7
rolls = list(map(int, input().split()))

for elem in rolls:
    count_nums[elem] += 1

for i in range(1, 7):
    print(f"{i} - {count_nums[i]}")