const palindromes = function (str) {
  str = str.toLowerCase();
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    while (!isAlphaNumeric(str, l)) {
      l++;
    }
    while (!isAlphaNumeric(str, r)) {
      r--;
    }
    if (str[l] != str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

function isAlphaNumeric(str, index) {
  if (
    !(str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57) &&
    !(str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122)
  ) {
    return false;
  } else {
    return true;
  }
}

// Do not edit below this line
module.exports = palindromes;
