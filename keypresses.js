function EquivalentKeypresses(strArr) { 

  // code goes here  
 const process = (str) =>{
   const stack = []
   for (const char of str.split(',')){
     char ==='-B'? stack.pop(): stack.push(char)
   }
   return stack.join('')
 }
  return process(strArr[0]) === process(strArr[1])? 'true': 'false'
}