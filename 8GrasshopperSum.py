def summation(num):
    summ = 0
    n = 1
    while (n <= num):
        summ += n
        n += 1
    return summ
    pass # Code here

# my solution is really easy to understand

# this suggested solution is rather clever, using some math calc
def summation(num):
    return (1+num) * num / 2

# this one below is a good learning point of using range() in python to simulate the for loop
def summation(num):
    total = 0
    for i in range(0, num+1):
        total = total + i
    return total