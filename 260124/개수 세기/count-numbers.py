n_and_m = list(map(int, input().split())) # n, m
num_list = list(map(int, input().split())) # n만큼 수가 주어짐. 

m = n_and_m[1]

# num_list에서 m이 몇 번 등장할까?

print(num_list.count(m))

