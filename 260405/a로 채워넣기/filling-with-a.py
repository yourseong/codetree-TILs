A = input()

# 앞에서 두 번째 원소와 뒤에서 두 번째 원소를 문자 a로 대체한 이후의 문자열 출력

A = list(A)

A[1] = "a"
A[-2] = "a"

print("".join(A))