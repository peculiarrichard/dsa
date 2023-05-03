var differenceOfSum = function(nums) {
    let elemSum = 0;
    let digitSum = 0;

    for(let i = 0; i<nums.length; i++){
        elemSum += nums[i]
        let temp = nums[i]
        while (temp > 0){
        digitSum += temp%10;
        temp = Math.floor(temp/10);
        } 
    }
    return Math.abs(elemSum - digitSum)
    };