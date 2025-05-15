//Bubble sort has a time complexity of quadratic time

function bubbleSort(items: number[]): number[]{

    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < items.length - i - 1; j++){

            if(items[j] > items[j + 1]){
                let temp = items[j];
                items[j] = items[j + 1]
                items[j + 1] = temp
            }
        }
    }
    for(let item of items){
        console.log(item)
    }
    return items
}

let array: number[] = [2,4,1,5,8,3]

let arrangedArray: number[] = bubbleSort(array)

console.log(arrangedArray)