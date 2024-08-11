const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number' || 
        num1 <= 0 || num2 <= 0 || 
        Math.floor(num1) != num1 || Math.floor(num2) != num2) {
        return 'ERROR';
    }
    let total = 0;
    for (i=Math.min(num1, num2); i<=Math.max(num1, num2); i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
