inp = input().split()
a = int(inp[0])
b = int(inp[1])

state = 0

for i in range(a, b+1):
    if (1920 % i == 0 and 2880 % i == 0):
        state = 1

if (state == 1):
    print(1)
else:
    print(0)