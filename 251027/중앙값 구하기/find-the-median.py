a, b, c = map(int, input().split())

median = None

# a > b, c
if a > b and a > c:
    if b > c: # a > b > c
        median = b
    else: # a > c > b
        median = c
elif a < b and a < c: # a < b, c
    if b < c:
        median = b # a < b < c
    else:
        median = c # a < b < c
else:
    median = a

print(median)


