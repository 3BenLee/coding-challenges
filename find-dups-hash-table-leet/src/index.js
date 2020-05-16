// Find all duplicates in an array

const getDuplicates = function (arr) {
  let hashTable = [];

  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]] === undefined) {
      hashTable[arr[i]] = true;
    } else {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
};

console.log(getDuplicates([3, -4, 2, -4, 2, 7]));
