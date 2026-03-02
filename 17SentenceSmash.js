/*
Sentence Smash
Write a function that takes an array of words and
 smashes them together into a sentence and returns the sentence. 
 You can ignore any need to sanitize words or add punctuation, 
 but you should add spaces between each word. 
 Be careful, there shouldn't be a space at the beginning or
  the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is 
great'

*/

function smash (words) {
   let result = "";
   for (const item of words) {
    // skip null / undefined items
    if (item == null) continue;

    // if it's a string and it's empty or only spaces, skip
    if (typeof item === "string" && item.trim() ==="") continue;
     //console.log(item);  --debugger  
     if (result !== "") result += " ";
     result += item;
   }
    //console.log(result); --debugger
    return result;
};