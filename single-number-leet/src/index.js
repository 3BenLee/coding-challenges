/* Given a non-empty array of integers, every element appears twice except for one.
 Find that single one. */

const singleNumber = function (nums) {
  const hashTable = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i].toString()] === undefined) {
      hashTable[nums[i].toString()] = 1;
    } else if (hashTable[nums[i]] === 1) {
      hashTable[nums[i].toString()] = 2;
    }
  }
  return hashTable.indexOf(1);
};

const nums = [-2, -2, -1];

console.log('answer', singleNumber(nums));
