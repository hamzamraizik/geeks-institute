# day 2 daily challenge

# 1
number = int(input("number: "))
lenght = int(input("length: "))
multiples = []
for i in range(1, lenght + 1):
    multiples.append(number * i)
print(multiples)

# 2
word = input("word: ")
result = ""
for letter in word:
    if len(result) == 0 or letter != result[-1]:
        result += letter
print(result)
