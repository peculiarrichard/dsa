function ABCheck(str) { 
   str = str.split('')

  for (let i=0; i< str.length; i++){
    if (str[i] === 'a' && str[i + 4] === 'b'){
      return "true"
    } else if(str[i] === 'b' && str[i+ 4] === 'a'){
        return "true"
    }
  }
  // code goes here  
  return 'false'; 

}