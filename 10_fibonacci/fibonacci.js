const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 2; i <= num; i++) {
    [prev2, prev1] = [prev1, prev2 + prev1];
  }
  return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
