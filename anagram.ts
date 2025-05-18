//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, "cinema", "iceman", and "a gentleman" are anagrams of "cinema", "iceman", and "a gentleman", respectively.
//// Write a function that takes two strings as input and returns true if they are anagrams of each other, and false otherwise. Ignore spaces and capitalization.
////
// Example:
// Input: "listen", "silent"
// Output: true

function areAnagrams(str: string, str2: string): boolean{
    let temp1: string = str.split('').sort().join().toLowerCase()
    let temp2: string = str2.split('').sort().join().toLowerCase()

    if(temp1 !== temp2){
        return false
    }
    return true;
}

console.log(areAnagrams('Hello',"hello"))