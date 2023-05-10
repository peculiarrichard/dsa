function ThreeSum(arr) { 
  let target = arr[0];
  let nums = arr.slice(1);
  for (let i = 0; i < nums.length -2; i++){
    let set = new Set();
    let curr_sum = target-nums[i];
    for (let j = i+1; j < nums.length; j++){
      if (set.has(curr_sum - nums[j])){
        return true;
      }
      set.add(nums[j]);
    }
  }
  return false;
}