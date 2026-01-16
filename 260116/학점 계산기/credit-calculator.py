# 과목 수 n
# n개 과목 학점 입력받아서 평균학점 구해 출력
# 4.0 >= Perfect, 3.0>= Good, else == Poor

n = int(input())
grades = list(map(float, input().split()))

aveg = 0
total = 0

for i in range(n):
    total += grades[i]

aveg = round(total / n,1)
print(f"{aveg:.1f}")

if aveg > 4.0:
    print("Perfect")
elif aveg > 3.0:
    print("Good")
else:
    print("Poor")

