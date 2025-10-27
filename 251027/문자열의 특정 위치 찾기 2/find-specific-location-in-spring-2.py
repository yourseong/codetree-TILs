arr = ["apple", "banana", "grape", "blueberry", "orange"]

c = input()
cnt = 0

for i in range(5): # arr 안에 있는 모든 원소에 대하여 
    if arr[i][2] == c or arr[i][3] == c: # 만약 3번째 또는 4번째 글자가 입력값과 같으면
        print(arr[i])
        cnt += 1

print(cnt)
        

