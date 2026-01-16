grades = list(map(float, input().split()))

total = 0

for i in range(8):
    total += grades[i]

total /= 8

print(f"{total:.1f}")
