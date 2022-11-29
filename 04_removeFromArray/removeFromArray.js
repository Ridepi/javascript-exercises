const removeFromArray = function(arr, ...moreArgs) {
    let removeFromArrSet = new Set(moreArgs);
    let newArr= arr.filter((args) => {
        return !removeFromArrSet.has(args);
    })
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
