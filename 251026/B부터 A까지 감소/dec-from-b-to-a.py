a, b = map(int, input().split())

for i in range (b-1):
    print(b - i, end = " ")
    i += 1

    if b-i < a:
        break