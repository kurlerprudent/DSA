//Arrays data structure
var numbers = [1, 2, 3, 4, 5, 6];
var strings = ["apple", "orange", "toy"];
//Generic type arrays
var numArray = [1, 2, 4];
var stringArray = ["toys", "heyy"];
//Array Iterations
//For loop
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//for of loop
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var item = strings_1[_i];
    console.log(item);
}
// forEach loop
numArray.forEach(function (num) {
    console.log(num);
});
//Array  Methods
//push: adds a new element to the end of the array
numbers.push(7);
console.log(numbers);
strings.push("Mango");
console.log(strings);
//pop: removes the last item from the array
numArray.pop();
console.log(numArray);
stringArray.pop();
console.log(stringArray);
// shift and unshift
// shift: removes the first element
numbers.shift();
console.log(numbers);
strings.shift();
console.log(strings);
//Unshift: adds an element to the begining of the array
numArray.unshift(0);
console.log(numArray);
stringArray.unshift("tits");
console.log(stringArray);
//slice: copies part of the array without making changes to the original array slice(startingIndex, endingIndex(doesn't include it))
console.log(numbers.slice(0, 2));
//splice: helps you to make changes to the array, you can add/ replace slpice(startingIndex, numberofitemsToDelete, addItems1, item2,.....)
var animals = ["cat", "dog", "owl"];
animals.splice(1, 1, "wolf", "Lion", "Eagle");
console.log(animals);
