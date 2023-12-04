function spinWords(string){
  //split the string into an array, deliminated by space
  //determine the length of the word
  
  targetArray = string.split(' ')
  let endString = ''
  
  for (var i = 0; i < targetArray.length; i++) {
    if (targetArray[i].length < 5){
      // save the word to result
      endString = [endString, targetArray[i]].join(' ')
    } else {
      endString = endString + targetArray[i].split('').reverse().join('') + ' '
    }
  }
  
  return endString
  
}

console.log(spinWords('hey, this is animal elephant'))