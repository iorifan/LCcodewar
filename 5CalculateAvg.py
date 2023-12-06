def find_average(numbers):
    summ = 0
    if (len(numbers) == 0):
        return 0
    else:
        for num in numbers:
            summ += num  
    return summ / len(numbers)
    pass

# I confused myself to divide averages with adding the two and dividing by 2
# it's interesting to know that python can do sum of an array per solution below

def find_average(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0