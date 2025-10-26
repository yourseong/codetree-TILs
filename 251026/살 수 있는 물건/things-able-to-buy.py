n = int(input())

# 가장 비싼 물건 사기
# 만약에 n 1500이면 mask 사야함
if n >= 1000 and n < 3000:
    print("mask")
elif n >= 3000:
    print("book")
else:
    print("no")