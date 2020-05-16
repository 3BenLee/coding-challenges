/**We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)  */

const lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    let max1 = stones[0],
      max2 = stones[1];
    stones = stones.splice(2);
    if (max1 > max2) stones.unshift(max1 - max2);
    stones.sort((a, b) => b - a);
  }
  return stones[0] || 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
