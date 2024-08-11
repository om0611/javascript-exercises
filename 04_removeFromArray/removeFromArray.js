const removeFromArray = function(array, ...elementsToRemove) {
    let new_array = array.filter(element => !(elementsToRemove.includes(element)));
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
