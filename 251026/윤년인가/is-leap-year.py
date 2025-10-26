y = int(input())

# 200 : false 나와야 함 - 100으로 나누어 떨어지는데 400으로 나누어 떨어지지 않는 수

# 100으로 나누어 떨어지되 400으로 나누어 떨어지지 않는 해는 평년
if (y % 100 == 0 and y % 400 != 0):
    print("false")
# 4로 나누어떨어지면 true (윤년)
elif (y % 4 == 0):
    print("true")
# 그 밖의 해는 평년 (false)
else:
    print("false")