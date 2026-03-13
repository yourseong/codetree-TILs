# n년간의 자동차 가격 정보 : 예를 들어 5면
n = int(input())

# 9 10 2 3 6인 경우
price = list(map(int, input().split()))

# 출력 : 4

# Please write your code here.
# 자동차를 단 한 번 사서 되팔 때의 이익 최대화하기
# 자동차를 사기 전에는 팔 수 없음

# 일단 제일 쌀 때 사기

# 언제 사도 이득이 안되는 경우 : 숫자가 내림차순으로 주어질 때
# 최솟값의 인덱스가 마지막 인덱스가 아니면 무조건 이익 발셍

buy_value = 0 # 구매가 초기화
temp = 0

profit_list = []

if min(price) != price[n-1]:
    buy_value = min(price)

    # 반복문 돌면서 최대 이익 출력
    for i in range(price[buy_value], n): # 이전 년도 가격이랑은 비교하면 안되므로 범위는 구매 이후부터 설정
        temp = price[i] - buy_value
        profit_list.append(temp)
    print(max(profit_list))
else:
    print(0)


