ints = list(map(int, input().split()))

# 짝수 번째 입력된 값의 합

even_total = 0
three_total = 0


for i in range(len(ints)):
    if (i + 1) % 2 == 0:
        even_total += ints[i]
    if (i + 1) % 3 == 0:
        three_total += ints[i]

aveg = round(three_total / 3, 1)

print(even_total, aveg)