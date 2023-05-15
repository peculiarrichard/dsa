function HistogramArea(arr) { 
  let maxArea = 0;

  for (let i = 0; i < arr.length; i++){
    let minHeight =arr[i];

    for (let j = i; j < arr.length; j++){
      
        minHeight = Math.min(minHeight, arr[j]);
        maxArea = Math.max(maxArea, minHeight * (j-i +1));
  }
    }

  return maxArea

}