n = list(map(int, input().split()))

# 중간에 0이 입력되면 입력 종료

myarr = []

for i in range(10):
    if (n[i] == 0):
        break
    myarr.append(n[i])

myarr.reverse()
   
print(*myarr)
