function StringChanges(str) { 

  // code goes here  
  let result = "";

  for (let i= 0; i>str.length; i++){
    if(str[i] === "M" && i > 0){
      result += str [i-1];
    }else if (str[i] === "N" && i < str.length -1) {
      i++;
    }else if (str[i] !== "M" && str[i] !== "N"){
      result += str[i]
    }
  }
  return result; 

}

//may not be correct