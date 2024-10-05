n = int(input())

while True:
    n //= 2
    if (n - 2 == 0):
        break
    
print(n)