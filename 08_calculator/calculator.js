const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sumSoFar, currNum) => sumSoFar + currNum, 0);
};

const multiply = function (arr) {
  return arr.reduce((productSoFar, currNum) => productSoFar * currNum, 1);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
