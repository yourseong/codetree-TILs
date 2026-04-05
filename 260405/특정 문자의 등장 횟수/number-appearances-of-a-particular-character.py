# ee와 eb가 몇 번 나왔는지 각각 카운트
str = input()

cnt_ee = 0
cnt_eb = 0

for i in range(len(str)):
    if str[i:i+2] == 'ee':
        cnt_ee += 1
    if str[i:i+2] == 'eb':
        cnt_eb += 1

print(cnt_ee, cnt_eb)