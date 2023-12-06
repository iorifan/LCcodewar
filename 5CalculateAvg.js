//my solution
function findAverage(array) {
    if (array.length == 0){
      return 0;
    } else {
      summ = 0
      for (let i = 0; i < array.length; i++){
        summ += array[i]
      }
      return summ / array.length
    }
  }


// most upvoted solution
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }