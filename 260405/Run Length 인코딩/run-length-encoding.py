A = input()

# 연속해서 나온 문자와 연속해서 나온 개수로 나타내기
# aaabbbbcbb면 a3b4c1b2

# 반복문으로 돌면서
# 다른 문자가 나오면 카운트...?

result = []

cnt = 1

for i in range(len(A) - 1):
    if A[i] == A[i+1]:
        cnt += 1
    else:
        result.append(A[i])
        result.append(str(cnt))
        cnt = 1

result.append(A[-1])
result.append(str(cnt))

print(len("".join(result)))

for elem in result:
    print(elem, end="")