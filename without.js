const without = function(array, remove) {
  let final = [];
  for (let x = 0; x < remove.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (array[y] !== remove[x]) {
        final.push(array[y]);
      }
    }
  }
  return final;
};

const assertArraysEqual = function () {
  if (eqArrays() === true) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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

console.log(without([1, 2, 3], [1]));
without(["1", "2", "3"], [1, 2, "3"]);


module.exports = without;