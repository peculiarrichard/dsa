function FirstFactorial(num) { 
  let factorial = 1;
  if (num == 0 || num == 1){
    return 1
  }else if(num > 1){
    for(let i=num; i>=1; i--){
      factorial = factorial * i
    }
    return factorial;
  } else{
    return "number not positive"
  }

}
   