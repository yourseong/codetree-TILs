n = int(input())

state = 0

for i in range(n + 1):
    if (i != 1 and i != n and i % n == 0): # 1과 자기 자신이 아닌 다른 수를 약수로 갖는 경우
        state = 0 # 소수가 아니다

if state == 0: #소수이면
    print("P") #P
else:
    print("C")