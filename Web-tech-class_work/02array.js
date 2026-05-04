/*const superheros = ["Harshvardhan", "Vrushabh", "Dikshant","Hulku"];
const tahir = "Tahir";
superheros.push(tahir);
console.log(superheros[3][2]);


//array concat
const atharv = "atharv"
const c = superheros.concat(atharv);
console.log(c);



//nested array flat method

const arr = [1,[2,3],7,[4,5],6];


const arr1 = arr.flat(Infinity);
console.log(arr1);

const anotherarr2 = arr1.flat(1);
console.log(anotherarr2);
*/
//how deep a nested array should be flattened default value is 1
//flattend all levels no matter how deep 
//flat does not change the original array it return new array useful when nested data

arr1= [1, 2, 3, 4, 5, 6, 7];

//data scipting using this method 
console.log(Array.isArray("Digvijay")); // check even value are array or not
console.log(Array.isArray(arr1)); // we can use 
console.log(Array.from(arr1)); // it convert array like object to array


console.log(Array.from("name : Digvijay")); // it convert string to array of characters
console.log(Object.keys({name : "Digvijay", age: 21})); // it return array of keysewes
console.log(Object.values({name : "Digvijay", age: 21})); // it return array of values


let score1 = 100;
let score2 = 200;
let socre3 = 300;
console.log(Array.of(score1, score2, socre3)); // it create array from the given values
//gives array with the given values no matter how many values are given

//diff. arrayof  and arrayfrom     IMPORTANT
//Array.of() creates an array from arguments
//Array.from() creates an array from iterable or array-like objects
