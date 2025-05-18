// //Arrays data structure
// let numbers: number[] = [1,2,3,4,5,6]
// let strings: string[] = ["apple", "orange", "toy"]
// //Generic type arrays
// let numArray: Array<number> = [1,2,4]
// let stringArray: Array<string> = ["toys", "heyy"]
// //Array Iterations
// //For loop
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }
// //for of loop
// for(let item of strings){
//     console.log(item)
// }
// // forEach loop
// numArray.forEach((num)=>{
//     console.log(num)
// })
// //Array  Methods
// //push: adds a new element to the end of the array
// numbers.push(7)
// console.log(numbers)
// strings.push("Mango")
// console.log(strings)
// //pop: removes the last item from the array
// numArray.pop()
// console.log(numArray)
// stringArray.pop()
// console.log(stringArray)
// // shift and unshift
// // shift: removes the first element
// numbers.shift()
// console.log(numbers)
// strings.shift()
// console.log(strings)
// //Unshift: adds an element to the begining of the array
// numArray.unshift(0)
// console.log(numArray)
// stringArray.unshift("tits")
// console.log(stringArray)
// //slice: copies part of the array without making changes to the original array slice(startingIndex, endingIndex(doesn't include it))
// console.log(numbers.slice(0,2))
// //splice: helps you to make changes to the array, you can add/ replace slpice(startingIndex, numberofitemsToDelete, addItems1, item2,.....)
// let animals: string[] = ["cat","dog","owl"]
// animals.splice(1,1,"wolf","Lion","Eagle")
// console.log(animals)
// //Comparing items in the array
var myArray = [1, 4, 3, 2, 5, 7, 6];
for (var i = 0; i < myArray.length - 1; i++) {
    if (myArray[i] > myArray[i + 1]) {
        console.log("".concat(myArray[i], " is greater that ").concat(myArray[i + 1]));
    }
    else {
        console.log("".concat(myArray[i], " is less than ").concat(myArray[i + 1]));
    }
}
//Check if two neighbors are the same in an array
var myArray2 = [1, 2, 2, 4, 5, 3, 3];
for (var i = 0; i < myArray2.length - 1; i++) {
    if (myArray2[i] === myArray2[i + 1]) {
        console.log("".concat(myArray2[i], " and ").concat(myArray2[i + 1], " are a match"));
    }
}
//Modifying values
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        myArray[i] *= 2;
        console.log(myArray);
    }
}
//Push zeroes to the end of the array
function zeroesAtEnd(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num !== 0) {
            result.push(num);
        }
    }
    while (result.length < arr.length) {
        result.push(0);
    }
    return result;
}
console.log(zeroesAtEnd([1, 0, 5, 3, 0, 6, 0]));
function applyOperations(nums) {
    var result = [];
    for (var num = 0; num < nums.length - 1; num++) {
        if (nums[num] === nums[num + 1]) {
            nums[num] *= 2;
            nums[num + 1] = 0;
        }
    }
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        if (i !== 0) {
            result.push(i);
        }
    }
    while (result.length < nums.length) {
        result.push(0);
    }
    return result;
}
;
console.log(applyOperations([1, 2, 2, 3, 1]));
