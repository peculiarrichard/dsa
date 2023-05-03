function MatchingCharacters(str) { 

  let max = -1;
  for (let i= 0; i< str.length; i++) {
    for (let j =i+1; j<str.length; j++){
      if(str[i] === str[j]){
        let subStr = str.substring(i+1, j);
        let uniqueChars = new Set(subStr.split(""));
        max = Math.max(max, uniqueChars.size);
      }
    }
  }
    return max;
}