c = input()

fruits = ["apple", "banana", "grape", "blueberry", "orange"]

count = 0

for i in range(5):
    if fruits[i][2] == c or fruits[i][3] == c:
        print(fruits[i])
        count += 1

print(count)