n = int(input())

cnt = 0

for i in range(n):
    for j in range(n):
        cnt+=1
        if cnt <= 9:
            print(cnt, end="")
        else:
            cnt = 1
            print(cnt, end="")
    print()

        