var maximumCount = function(nums) {
    const neg = nums.filter(value => value < 0);
    const pos = nums.filter(value => value > 0);

    return Math.max(neg.length, pos.length)
    
};
arr = [-3,-2,-1,0,0,1,2]
console.log(maximumCount(arr))