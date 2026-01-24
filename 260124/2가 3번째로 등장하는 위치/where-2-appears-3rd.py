# 첫 번째 줄에 n
n = int(input())

# 2 등장 횟수 세기
cnt = 0

# 테스트용 리스트
idx_list = []

# 두 번째 줄에 n개의 수
nums = list(map(int, input().split()))

# nums 원소 중 2가 3번째로 등장하는 곳의 인덱스 출력
for i in range(n):
    if nums[i] == 2: # 2를 발견하면
        cnt += 1 # cnt 증가하고
        idx = i # 그곳의 인덱스를 저장
        idx_list.append(idx)

    # 2가 3번 등장하면 종료
    if cnt == 3:
        break

print(idx_list[2]+1)