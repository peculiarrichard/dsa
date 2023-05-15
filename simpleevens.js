function SimpleEvens(num) { 
  let numStr = num.toString();

  for (let i = 0; i<numStr.length; i++){
    if (parseInt(numStr[i]) % 2 !== 0){
      return false;
    }
  }
  return true;
}