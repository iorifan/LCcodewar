def greet(name):
    return 'Hello, ' + name + ' how are you doing today?'
    pass

#in visual studio, we need to hit run python file to see the results

# there is no way to comment out a block of codes in python
# below is a more advanced ways to use string function

def greet(name):
    return f'Hello, {name} how are you doing today?'

def greet(name):
    return "Hello, {} how are you doing today?".format(name)