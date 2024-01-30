/*
    ICE3 Part 1
    Austin Pyzer
    January 30, 2024
*/
// All about arrays

// Array literal
let myArray = [1,2,3,4,5];

// Creating array using constructor
let myArrayContructor = new Array();
console.log(`Empty array: ${myArrayContructor}`);
myArrayContructor.push(24);
console.log(`Not empty array: ${myArrayContructor}`);

// Creating array with values using constructor
let myConstructorArray = new Array(10, 20, 30, 40, 50);
console.log(`#value array: ${myConstructorArray}`);
console.log(`# value array obj:`, myConstructorArray);

// Create empty array with contructor of size 10
let array2 = new Array(10);
console.log(`New array: ${array2}`);
array2.push(80);
console.log(`New array: ${array2}`);

// Tuesday
let tuesdayArray = new Array(10).fill("Tuesday");
console.log(`Class is on: ${tuesdayArray}`);


/**
 * Squares two nums
 * @param {*} x 
 * @returns 
 */
function square(x){
    return x * x;
}

let nums = new Array(1, 33, 22, 5);


console.log(`squared values: ${squaredNums}`);

// TODO: rewrite
// let squaredNums = nums.map(function(value){
//    return square(value);
// })
// using arrow functions