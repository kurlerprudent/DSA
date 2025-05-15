//Linear Search Algorithm has a linear time complexity thus the executin time increaes linearly with input size
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (i === target) {
            console.log("element ".concat(target, " found at index ").concat(i + 1));
        }
    }
    return -1;
}
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 5;
linearSearch(items, target);
