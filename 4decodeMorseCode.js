decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  /* 
  split the string into words by split('   '), need a trim here
  split each words into letters by split(' ')
  for each letter, feed into below morse code function
    MORSE_CODE['substring'] to decode the relevant substrings
  join() the resulting letters into words
  join(' ') into a string
  
  this is a good milestone. I need to clear up the padding empty strings for some inputs

  */
  morseWord = morseCode.split('   ')
  morseLetter =[]
  myString = []
  for (var i = 0; i < morseWord.length; i++) {
    morseLetter = morseWord[i].split(' ')
    var myWord = ''
    for (var j = 0; j < morseLetter.length; j++) {
      myWord += MORSE_CODE[morseLetter[j].trim()]
    }
    console.log(myWord)
    myString.push(myWord)
    console.log(myString)
  }
  return myString.join(' ')
  
}


