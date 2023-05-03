function SimpleSymbols(str) { 
  for (let i = 0; i< str.length; i++){
    if (/^[a-zA-Z]+$/.test(str[i])){
      if ( i ===0 || i === str.length -1 || str[i-1] !=='+' || str[i+1]!=='+'){
        return false 
    }
  }
  }
  return true
  // code goes here  
  return str; 

}