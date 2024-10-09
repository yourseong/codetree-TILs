n = int(input())

state = 0

for i in range(n + 1):
    if (i % n != 0):
        state = 0

if state == 0:
    print("P")
else:
    print("C")