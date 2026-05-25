//programs to manipulate strings to solve practical problems
//example program to return the length of the last word in the string

let string = "Hello World" //input string 

let arr = string.split(" ") //split the words in the string and store in an array
console.log(arr); //prints the array

let last = arr.at(-1); //stores the last element in the array to the variable

console.log("The length of the last word in the string is", last.length); //prints the length of the last word


//example program to return the length of the last word in a string which has multiple spaces

let string2 = " fly me to the moon " //input string

trimmedstring = string2.trim(); //trims the extra spaces in the string
console.log(trimmedstring); //prints the trimmed string

let arr2 = trimmedstring.split(" ") //split the words in the string and store in an array
console.log(arr2); //prints the array

let last2 = arr2.at(-1); //stores the last element in the array to the variable

console.log("The length of the last word in the string is", last2.length); //prints the length of the last word

//program to check if 2 strings are anagrams
function isAnagram(s1,s2){

    let string1 = s1.replaceAll(' ', ''); //removes spaces in the string
    let string2 = s2.replaceAll(' ', '');

let comp1 = string1.toLowerCase().split('').sort().join(''); //converting the string to lower case followed by sorting the characters in the string
let comp2 = string2.toLowerCase().split('').sort().join('');


if(comp1===comp2){ //comparing the 2 strings
    console.log(true) //returns true if the words are anagrams
}
else {
    console.log(false) //returns false if the words are not anagrams
}
}

isAnagram("listen","silent")
isAnagram("hello","world")
isAnagram("the eyes", "they see")