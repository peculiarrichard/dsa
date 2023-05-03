function ArrayMatching(strArr) { 
 let arr1 =JSON.parse(strArr[0])
 let arr2 = JSON.parse(strArr[1]);

 let maxLength = Math.max(arr1.length, arr2.length)

 let result =[]

 for (let i = 0; i < maxLength; i++){
   let sum = (arr1[i] || 0) + (arr2[i] || 0);
   result.push(sum);
 }

 return result.join("-")
  // code goes here  

}