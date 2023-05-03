function ChangingSequence(arr) { 

  // code goes here
  if(arr[0] > arr[1]){
    for (i =0; i < arr.length-1; i++){
      if (arr[i] > arr[i+1]){
        continue;
      }else {
        return i; 
      }
    }
  }  else {
    for (i = 0; i< arr.length-1; i++){
      if (arr[i] < arr[i+1]){
        continue;
      }else{
        return i
      }
    }
  }
  return -1
}