function GCF(arr) { 

let a = arr[0];
let b = arr[1];

while (b != 0){
  let temp = b;
  b = a%b;
  a = temp
}
return a;
}