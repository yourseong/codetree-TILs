sex = int(input())
age = int(input())
result = ""

if (sex == 0):
    if (age >= 19):
        result = "MAN"
    else:
        result = "BOY"
elif (sex == 1):
    if (age >= 19):
        result = "WOMAN"
    else:
        result = "GIRL"

print(result)    