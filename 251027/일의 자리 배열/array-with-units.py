a, b = map(int, input().split())

# 2, 5가 입력되면 2, 5가 첫번째, 두번째 항으로 설정됨
arr = [a, b]

# a + b 한다음 3번째 항부터는 이렇게
# 2 + 5 = 7 (3번째 항) : 리스트 상태 - 2 5 7
# 7 + 5 = 12 (4번째 항 = 2) : 리스트 상태 - 2, 5, 7, 2
print(a, b, end=" ")
for i in range(2, 10):
    next_elem = (arr[-1] + arr[-2]) % 10
    arr.append(next_elem)
    print(arr[i], end=" ")


