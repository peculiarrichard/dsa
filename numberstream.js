function NumberStream(str) { 

  // code goes here  
  for (let i=0; i < str.length; i++){
    let currentNum = parseInt(str[i]);
    let count = 1

    while (parseInt(str[i + 1]) === currentNum){
      count ++;
      i++;

      if (count === currentNum){
        return "true"
      }
    }
  }
  return "false"; 

}