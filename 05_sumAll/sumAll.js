const sumAll = function(start, end) {
if (start<0||end<0||typeof start != 'number' ||typeof end != 'number'){
    return 'ERROR';
} else if (end<start) {
    return ((start-end)+1)*(start+end)/2;
} else {
return ((end-start)+1)*(end+start)/2;
}
};

// Do not edit below this line
module.exports = sumAll;
