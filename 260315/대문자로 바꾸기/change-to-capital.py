# 5행 3열 배열
temp = ""

for i in range(5):
    arr = list(input().split())
    for j in range(3):
        temp = arr[j].upper()
        print(temp, end=" ")
    print()