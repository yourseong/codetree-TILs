n = int(input())
sumVal = 1

for i in range(1, 11):
    sumVal *= i
    if(sumVal >= n):
        print(i)
        break