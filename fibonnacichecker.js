function FibonacciChecker(num) { 

  let prevNum = 0;
  let currentNum = 1;
  let nextNum = prevNum + currentNum;

  while (nextNum <= num){
    if (nextNum === num){
      return 'yes';
    }
    prevNum = currentNum;
    currentNum = nextNum;
    nextNum = prevNum + currentNum
  }
  return 'no'
}