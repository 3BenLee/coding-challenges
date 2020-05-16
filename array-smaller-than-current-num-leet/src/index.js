import './styles.css';

/* Find out how many of the other numbers in the array
 *  are smaller than the current num[i]
 */

// var smallerNumbersThanCurrent = function(nums) {
//   let sorted = nums.slice().sort((a,b) => a - b);
//   let res = [];

//   for(let i=0; i < nums.length; i++){
//       res.push(sorted.indexOf(nums[i]));
//   }

//   return res;
// };

const smallerNumbersThanCurrent = function (nums) {
  // Spread operator makes a copy of the original array
  const sortedNums = [...nums].sort((a, b) => a - b);
  console.log(sortedNums);
  console.log(nums);
  return nums.map((num) => sortedNums.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8, 3, 3, 1, 5]));
