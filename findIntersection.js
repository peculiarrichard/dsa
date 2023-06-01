function FindIntersection(strArr) { 

  let arr1 = strArr[0].split(',');
  let arr2 = strArr[1].split(',');
  return arr1.filter((num)=>
  arr2.includes(num)).join(',') || false; 

}