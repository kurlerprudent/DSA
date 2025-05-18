//Checking if pairs of numbers or elements in an arrays are same
function pairCount(numArray, counts) {
    var pairCounter = 0;
    var n = numArray.length;
    for (var i = 0; i < n - 2; i++) {
        for (var j = i + 1; j < n - 1; j++) {
            if (numArray[i] === numArray[j] && i * j % counts === 0) {
                pairCounter += 1;
            }
        }
    }
    return pairCounter;
}
console.log(pairCount([3, 1, 2, 4, 2, 1, 3], 1));
