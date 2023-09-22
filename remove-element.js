var removeElement = function (nums, val) {
  //   nums.sort();
  //   return nums.filter((num) => num !== val);
  //   -------------------------------------------
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return k;
};

let nums = [1, 6, 3, 4, 4, 4, 4, 4, 7, 8];

console.log(removeElement(nums, 4));
