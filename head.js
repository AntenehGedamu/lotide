const assertEqual = require('./test/assertEqual');

const head = function(arg1) {
  if (arg1.length === 0) {
    return "undefined";
  }
  return arg1[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;