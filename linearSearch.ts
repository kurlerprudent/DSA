//Linear Search Algorithm has a linear time complexity thus the executin time increaes linearly with input size

interface Params{
    arr: number[],
    target: number
}

function linearSearch(arr: number[], target: number): number{
    for(let i = 0; i < arr.length; i++){
        if(i === target){
            console.log(`element ${target} found at index ${i + 1}`)
        }
    }
    return -1
}

let items: number[] = [1,2,3,4,5,6,7,8,9];

let target: number = 5;

linearSearch(items, target)