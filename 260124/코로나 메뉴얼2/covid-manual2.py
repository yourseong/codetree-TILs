# 3개 줄에 걸쳐 증상과 체온 입력
'''
Y 38
N 36
Y 40
'''

# 3명의 사람을 검사해서 A로 가는 사람이 2명 이상 나올때는 위급상황 E로 분류
symptom_list = [] # ['Y', 'N', 'Y'] 
fever_list = [] # [38, 36, 40]

cntA = cntB = cntC = cntD = 0

for i in range(3):
    s, f = list(input().split()) # s = 증상, f = 열
    symptom_list.append(s)
    fever_list.append(int(f))

for i in range(3):
    if symptom_list[i] == "Y":
        if fever_list[i] >= 37:
           cntA += 1 # 증상도 있고 37 이상이면 A
        else:
           cntC += 1 # 증상만 있고 온도 정상이면 C
    elif symptom_list[i] == "N":
        if fever_list[i] >= 37:
           cntB += 1# 증상 없는데 37 이상이면 B
        else:
            cntD += 1 # 증상 없고 온도도 정상이면 D

cnt_list = [cntA, cntB, cntC, cntD]
if cntA >= 2:
    cnt_list.append("E")

print(*cnt_list)




