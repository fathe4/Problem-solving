var removeDuplicates = function (nums) {
  //   if (nums.length <= 1) return nums.length;

  //   let original = nums[0];
  //   let count = 1;
  //   let arr = [];
  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] !== original) {
  //       //   nums[count] = nums[i];
  //       arr.push(nums[i]);
  //       original = nums[i];
  //       count += 1;
  //     }
  //   }
  //   for (let i = 1; i < nums.length; i++) {
  //     if (!arr.includes(nums[i])) {
  //       arr.push(nums[i]);
  //     }
  //   }

  //   return arr;

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = nums.length; j >= i + 1; j--) {
  //       if (nums[i] == nums[j]) {
  //         nums.splice(i, 1);
  //       }
  //     }
  //   }
  //   return nums;

  let firstNum = nums[0];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != firstNum) {
      firstNum = nums[i];
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 7]));
