// Return the character that is most common in a string
// Example: "Javascript" return "a"

var findMaxCharacter = function (word) {
  const wordArr = word.split('');
  let table = {};
  for (i = 0; i < wordArr.length; i++) {
    if (!table[wordArr[i]]) {
      table[wordArr[i]] = 1;
    } else {
      table[wordArr[i]]++;
    }
  }
  const result = Object.keys(table).reduce((a, b) => (table[a] > table[b] ? a : b));
  return result;
};

console.log(findMaxCharacter('alphabet'));
