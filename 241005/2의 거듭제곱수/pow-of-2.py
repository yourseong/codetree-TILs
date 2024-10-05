n = int(input())
cnt = 1

while True:
    n //= 2
    cnt += 1
    if (n - 2 == 0):
        break
    
print(cnt)