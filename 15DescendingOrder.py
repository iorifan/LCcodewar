#Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
#Essentially, rearrange the digits to create the highest possible number.
#Examples:
#Input: 42145 Output: 54421
#Input: 145263 Output: 654321
#Input: 123456789 Output: 987654321

#this feels like a sorting question. I can do it sequentially as a base case
#    then i can do a bubble(?) sort to see if i can test the mid-point of the array repeatedly 
#    (for this one, IDK how to build a stop-mechanism to determine when this mid-checking is complete)

def descending_order(num):
    myNum = []
    #myNum.append(str(num)[0])
    #print(myNum)
    #print(str(num)[0])
    counterI = 0
    counterJ = 0
    for i in str(num):
        if len(myNum) < 1:
            myNum.append(i)
        else:
            for j in myNum:
                if i > j:
        #            print("J is " + j)
        #            print(myNum)
                    myNum.insert(counterJ, i)
                    break
                else:
                    myNum.append(i)
                    break
        #            counterJ += 1
    #    counterI += 1
    return myNum

#now, the question is how to compare?
       
print(descending_order(42145))