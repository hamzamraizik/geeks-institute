# Day 2 Python exercises

# Exercise 1: Hello World
print("Hello world " * 4)

# Exercise 2: Some Math
print((99 ** 3) * 8)

# Exercise 3: What's your name?
name = input("What is your name? ")
if name.lower() == "hamza":
    print("Hey, name twin! Which one of us is the original?")
else:
    print(f"Hi {name}, you have a different name from me.")

# Exercise 4: Roller coaster
height = int(input("What is your height in cm? "))
if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")

# Exercise 5: Favorite numbers
my_fav_numbers = {7, 12, 42}
my_fav_numbers.add(3)
my_fav_numbers.add(99)
# Sets have no last item, so remove the second number I just added.
my_fav_numbers.remove(99)
friend_fav_numbers = {3, 8, 21}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 6: Tuple
numbers = (1, 2, 3)
# We can't change a tuple in place, but can make a new one.
numbers = numbers + (4,)
print(numbers)

# Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Number of apples:", basket.count("Apples"))
basket.clear()
print(basket)

# Exercise 8: Sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
                   "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")
