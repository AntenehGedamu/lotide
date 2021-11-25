const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:✅✅✅ " +  actual + "  ===  " + expected);
  } else {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  }
};

console.log(countLetters("lighthouse lab"));
