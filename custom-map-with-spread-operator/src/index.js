// Custom map function utulizing the spread operator in place of 'push'

const myCustomMapFunction = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // newArr.push(callback(arr[i]));
    // or use spread
    newArr = [...newArr, callback(arr[i])];
  }
  return newArr;
};

const addOne = (x) => x + 1;

console.log(myCustomMapFunction([1, 2, 3], addOne));
