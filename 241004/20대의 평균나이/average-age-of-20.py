cnt = 0
sumVal = 0

while True:
    n = int(input())

    if (n < 20 or n >= 30):
        print(f"{sumVal / cnt:.2f}")
        break

    cnt += 1
    sumVal += n