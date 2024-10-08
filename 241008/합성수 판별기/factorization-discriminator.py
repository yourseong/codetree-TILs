n = int(input())

# n이 2 이상, n-1 이하의 어떤 정수로 나누어 떨어지면 n은 합성수
# ex - 35는 5로 나누어 떨어지므로 합성수.
#      13은 조건에 부합하지 않으므로 합성수가 아님.

state = False

for i in range (2, n):
    if n % i == 0:
        state = True

if state == True:
    print("C")
else:
    print("N")