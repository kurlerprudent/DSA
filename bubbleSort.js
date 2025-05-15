//Bubble sort has a time complexity of quadratic time
function bubbleSort(items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items.length - i - 1; j++) {
            if (items[j] > items[j + 1]) {
                var temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
            }
        }
    }
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
    return items;
}
var array = [2, 4, 1, 5, 8, 3];
var arrangedArray = bubbleSort(array);
console.log(arrangedArray);
