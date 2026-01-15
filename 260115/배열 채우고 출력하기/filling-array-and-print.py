# 문자 10개 저장할 수 있는 배열 만들고  10개 문자열 입력받기.

arr = list(input().split())

# 인덱스에 거꾸로 접근하려면 어떻게 해야할까

for i in range(len(arr)-1, -1, -1):
    print(arr[i], end="")
