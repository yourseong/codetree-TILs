str = input()

ee_exists = "No"
ab_exists = "No"

# ee가 존재하는가
if 'ee' in str:
    ee_exists = "Yes"
if 'ab' in str:
    ab_exists = "Yes"
    
print(ee_exists, ab_exists)