// Check if array contains two values whose sum equals the target value

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

const nums = [2, 3, 4];
const target = 7;

console.log(twoSum(nums, target));
