n = int(input())

# n보다 크거나 같은 n의 배수 중 작은 수 5개

for i in range (1, 6):
    print((n * i), end=" ")
    i += i