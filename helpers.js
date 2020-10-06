// Remove white space from given string
removeSpaces = (str) => {
  return str.replace(/\s/g, '');
};

// Count separate words from given string
getWordCount = (str) => {
  return str.trim().split(/\s+/).length;
};

// Get rid of non-alphabetic characters
removeNonLetters = (str) => {
  return str.replace(/[^A-Za-z]/g, '');
};

// Given string is returned as sorted array
sortLetters = (str) => {
  let arr = str.split('');
  return arr.sort();
};

// Remove duplicate characters from array
removeDuplicateCharacters = (arr) => {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Array values to object array [{"e":0},{"h":0}]
arrayToObject = (arr) => {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let obj = {};
    obj[arr[i]] = 0;
    result.push(obj);
  }
  return result
};

getOccurrence = (array, value) => {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
};