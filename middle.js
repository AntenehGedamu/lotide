const eqArrays = function(arr1, arr2) {
  if (!arr1.length === arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function () {
  if (eqArrays() === true) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let arrResult = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      arrResult.push(arr[((arr.length) / 2) - 1]);
      arrResult.push(arr[(arr.length) / 2]);
    } else {
      arrResult.push(arr[Math.floor(0.5 * arr.length)]);
    }
  } return arrResult;
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));