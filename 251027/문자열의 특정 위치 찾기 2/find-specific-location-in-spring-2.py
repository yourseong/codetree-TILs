arr = ["apple", "banana", "grape", "blueberry", "orange"]

c = input()
cnt = 0

for i in range(5): # arr 안에 있는 모든 원소에 대하여 
    for j in range(2, len(arr[i]) - 1): # 첫 번째 글자부터 마지막 글자까지 탐색
        if arr[i][j] == c: # 만약 글자가 c랑 같으면
            cnt += 1
            print(arr[i])

print(cnt)
        

