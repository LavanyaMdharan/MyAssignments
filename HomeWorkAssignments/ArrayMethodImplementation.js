//program to use JS array methods to manipuate and process array data

//declaring an array
let string = ["test", true , 78, 34.3, 'javascript']

//printing the array before any operation
console.log(string);

//using push() method to add elements into an array
string.push(false)
console.log(string); //element should be added at the end

//using pop() method to remove the last element 
string.pop()
console.log(string); //last element should be removed

//using shift() method to remove the first element
string.shift()
console.log(string); //first element should be removed

//using unshift() method to add an element in the beginning
string.unshift("test1")
console.log(string); //a new element should be added at the beginning

//using includes() to check whether an element exists
if(string.includes(78)) {
    console.log(string); //the array will be printed if the element exists and not be printed if it does not exist
}

//using indexOf() to find the position of the element
console.log(string.indexOf(34.3)); //index position of the element will be printed

//using join() to convert array into string
let string2 = string.join()
console.log(string2); //converted string is printed
console.log(typeof(string2)); //prints variable type of string2

//using reverse() to reverse the array
let reverse = string.reverse()
console.log(reverse); //prints the reverse of the array

//using sort() to sort the array
let sorted = string.sort()
console.log(sorted); //prints the sorted array