function isPrime(num) {
  //base case: negative and zero are not prime
  if (num <=1) {
    return false
  }

  if (num == 2) {
    return true
  }

  for (var i = 2; i < Math.ceil(Math.sqrt(num))+1; i++) {
    if (num % i == 0) {
      return false
    } 

  }

  return true
  
  /* approach 1: take the num and reminder 2, 3, 5, 7, 11, 13, 17 etc prime numbers
        but this prime number list goes on forever? goes on for a long time?
    approach 2: this is a math problem. 
      1 Search online on logics of determining a prime number
        this online logic seems very complex (Fermat's little thm) so not sure how to easily implement
      2 implement this logic

    approach 3:
      1. have a list of prime numbers that are less than 50
      2. compare num against prime numbers less than itself
      3. brutal force the rest?

    without knowing the math of this, it seems hard to calc

    approach 4: the corrected method
    The most basic method of checking the primality of a given integer is called trial division
      This method divides n by each integer from 2 up to the square root of n
      https://en.wikipedia.org/wiki/Trial_division
  
      */


  
}

// one of the correct answers where the limit is simply a sqrt to avoid detecting 2 scenario

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}