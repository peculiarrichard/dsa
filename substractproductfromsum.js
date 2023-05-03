var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;

    while (n!=0){
        remainder = n%10
        product = product * remainder
        sum = sum + remainder
        n= Math.floor(n/10)
    }
    return product - sum;
};

console.log(subtractProductAndSum(4425))