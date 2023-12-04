function spinWords(string){
    //split the string into an array, deliminated by space
    //determine the length of the word
    
    targetArray = string.split(' ')
    let endString = ''
    

    for (var i = 0; i < targetArray.length; i++) {
    if (targetArray[i].length < 5){
        // save the word to result
        endString = endString + targetArray[i] + ' '
    } else {
        endString = endString + targetArray[i].split('').reverse().join('') + ' '
        }
    }

    
    //return endString.slice(0, -1)
    return endString.trim()
  }
  
  console.log(spinWords('animal'))

  /* good answers

  function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/
