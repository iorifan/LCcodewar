#this is my latest

def reverse_words(text):
    myText = text.split()
    myReverse = []
    for i in myText:
        myReverse.append(i[::-1])
    return " ".join(myReverse)
        


#below are some errors. it seems like there are double spaces among words
#testing for 
#reverse_words(tests  a  have  avoid  rule!  solution.  hardocoded  should  This  always  to)
#             'stset a evah diova !elur .noitulos dedocodrah dluohs sihT syawla ot' 
#should equal 'stset  a  evah  diova  !elur  .noitulos  dedocodrah  dluohs  sihT  syawla  ot'