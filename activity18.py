"""
Gaura Kuwar: activity 18
8/3/2022
"""
print("\n\n-------------- WHILE LOOP --------------")
print("Example 15) ask user to enter two numbers between 0 and 10 with checkpoints. Use a while loop to increment each number by 2 until the sum of them reach up to 30")
number1 = int(input("Enter a number between 0 and 10: "))
while number1 < 0 or number1 > 10:
    number1 = int(input("Try again! Enter a number between 0 and 10: "))

number2 = int(input("Enter a number between 0 and 10: "))
while number2 < 0 or number2 > 10:
    number2 = int(input("Try again! Enter a number between 0 and 10:"))

while number1 <= 20 and number2 <= 20:
    addition = number1 + number2
    if addition > 30:
        break

    print("%s + %s = %s" %(number1, number2, addition))
    number1 += 2
    number2 += 2

print("Example 14) create a while loop that checks if an entered number is between 0 and 10")
number = int(input("Enter a number between 0 and 10: "))
while number < 0 or number > 10:
    number = int(input("Try again! Enter a number between 0 and 10: "))

print("Entered number =", number)

print("Example 13) user enters two number between 0 and 10. Use while loop by 2 until one of them reach up to 20")
num1 = int(input("Enter a number between 0 and 10: "))
num2 = int(input("Enter a 2nd number between 0 and 10: "))
while num1 <= 20 and num2 <= 20:
    print("number 1 = %s and number 2 = %s" %(num1, num2))
    num1 += 2
    num2 += 2

print("Example 12) while loop basics")
i = 0
while i < 6:
    print("i =", i)
    i += 1
else:
    print("i is no longer less than 6!")


print("\n\n-------------- FOR LOOP --------------")
print("Example 11) for-else statement")
for n in range(7):
    print(n)
else:
    print("DONE!")

print("Example 10) use for loop to print num from 10 to -5 and skip numbers that are multiple of 4")
for num in range(10, -5, -1):
    if num % 4 == 0:
        continue
    print(num)

print("Example 9) Nesting for loop and if statement")
for counter in range(10):
    if counter == 5:
        continue
    print("Now counting:", counter)
    print("=*" * 10)

print("Example 8) for loop in a string")
msg = "Hello World!"
for m in msg:
    print("character =", m)

print("Example 7) for loop in a list")
colors = ['yellow', 'red', 'blue', 'green', 'white', 'black']
for c in colors:
    print("color =", c)

print("Example 6) for loop decrement counting")
for z in range(20, -10, -5):
    print("z =", z)

print("Example 5) for loop with three arguments")
for y in range(2, 30, 3):
    print("y =", y)

print("Example 4) for loop  basics")
for x in range(1, 5):
    print("Counting:", x)


print("\n\n-------------- CONDITIONAL STATEMENT --------------")
# Example 3) and, or operators
age = int(input("Enter an age: "))
gender = "Female"
if age == 5 and gender == "Male":
    print("5 year-old boy!")
elif age == 5 and gender == "Female":
    print("5 year-old girl!")
else:
    print("Any other age other than 5")

# if-elif-else statement example 2)
age = int(input("Enter an age: "))
if age == 5:
    print("Age = 5. Height should be around 102 cm and weight 14.8 lbs")
elif age == 6:
    print("Age = 6. Height should be around 108 cm and weight 16.3 lbs")
elif age == 7:
    print("Age = 7. Height should be around 113 cm and weight 18.0 lbs")
else:
    print("Unable to display height and weight")

# if statement, example 1) check if an age is an adult using if-else
if age >= 21:
    print("You are an adult!")
else:
    print("You are underage")
print("Welcome to the class!")
