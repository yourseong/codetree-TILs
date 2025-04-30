a, b, c = map(int, input().split())
s = a+b+c
avg = (a+b+c)//3
m = s - avg

print(s, avg, m, sep="\n")