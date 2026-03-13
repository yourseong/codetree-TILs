# n년간의 자동차 가격 정보 : 예를 들어 5면
n = int(input())

# 9 10 2 3 6인 경우
price = list(map(int, input().split()))

# 출력 : 4

# 자동차를 단 한 번 사서 되팔 때의 이익 최대화하기
# 자동차를 사기 전에는 팔 수 없음

# 사는 시점은 언제든 될 수 있다
# 싼 가격 계속 업데이트

# 언제 사도 이득이 안되는 경우 : 숫자가 내림차순으로 주어질 때
# 최솟값의 인덱스가 마지막 인덱스가 아니면 무조건 이익 발셍

buy_value = price[0] # 구매가 초기화
profit = 0 # 현재 이익
max_profit = 0 # 최대 이익

# if min(price) != price[n-1]:
    # buy_value = min(price) # !수정사항! 전체 최솟값에서 사는것이 꼭 이득이 아닐수도 있음

# 반복문 돌면서 최대 이익 출력
for i in range(1, n): 
    profit = price[i] - buy_value # 뒤 가격에서 구매가 빼기
    if max_profit < profit:
        max_profit = profit
    if buy_value > price[i]:
        buy_value = price[i]
print(max_profit)


