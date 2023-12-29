#this is my latest


def reverse_words(text):
    myText = text.split()
    myReverse = []
    for i in myText:
        myReverse.append(i[::-1])
    if len(myText) <= 1:
        return " ".join(myReverse)
    elif (check_space(text) / (len(myText) - 1) <= 1):
        return " ".join(myReverse)
    elif (check_space(text) / (len(myText) - 1) == 2):
        return "  ".join(myReverse)

def check_space(string):
     
    # counter
    count = 0
     
    # loop for search each index
    for i in range(0, len(string)):
         
        # Check each char
        # is blank or not
        if string[i] == " ":
            count += 1
        
    return count

def check_space(string):
     
    # counter
    count = 0
     
    # loop for search each index
    for i in range(0, len(string)):
         
        # Check each char
        # is blank or not
        if string[i] == " ":
            count += 1
        
    return count


print(reverse_words('tests  a  have  avoid  rule!  solution.  hardocoded  should  This  always  to'))
#below are some errors. it seems like there are double spaces among words
#testing for 
#reverse_words(tests  a  have  avoid  rule!  solution.  hardocoded  should  This  always  to)
#             'stset a evah diova !elur .noitulos dedocodrah dluohs sihT syawla ot' 
#should equal 'stset  a  evah  diova  !elur  .noitulos  dedocodrah  dluohs  sihT  syawla  ot'
#my resultNow 'stset  a  evah  diova  !elur  .noitulos  dedocodrah  dluohs  sihT  syawla  ot'