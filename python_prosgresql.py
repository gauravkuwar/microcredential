"""
Python and Postgresql Exercises
Student's Name: Gaurav Kuwar
"""
import math
import random

# Activity a
print("---------- ACTIVITY 3a ----------")
numOfFruits = int(input("Enter the number of fruits: "))
fruitsList = []

for num in range(numOfFruits):
    fruit = input("Fruit %s: " %(num + 1))
    fruitsList.append(fruit)

print("User created a list of", numOfFruits,"items and entered the values:", fruitsList)

# Activity b
print("----- Exercise 3: Printe between a specific range -----\n")
num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))

while num1 == num2:
    num2 = int(input("Both Numbers Same! Enter a different number 2: "))

if num1 < num2:
    smallerNum, biggerNum = num1, num2
else:
    smallerNum, biggerNum = num2, num1

while smallerNum < biggerNum:
    print(smallerNum)
    smallerNum += 1

# Activity c
def volumeCylinder(h, r):
    return round(math.pow(r, 2) * math.pi * h, 2)

radius = int(input("Enter a radius: "))
height = int(input("Enter a height: "))
volume = volumeCylinder(height, radius)

print("The volume with radius %s and height %s is %s" %(radius, height, volume))

# activity d
def rollDice(numOfRolls):
    for count in range(1, numOfRolls + 1):
        roll = random.randint(1, 6)
        print("Roll %s = %s" %(count, roll))

numOfRolls = int(input("How many times do you want to roll? "))
rollDice(numOfRolls)
