# 학생수
n = int(input())

total = 0
aveg = 0
cnt = 0

# 학생수만큼 시험점수 배열 입력받기
# i == 학생수
for i in range(n):
    grades = list(map(int, input().split()))

    # j = 힉생별 점수 인덱스
    for j in range(4):
        total += grades[j]
    aveg = total / 4
    total = 0

    if (aveg >= 60):
        print("pass")
        cnt += 1
    else:
        print("fail")

print(cnt)
    

