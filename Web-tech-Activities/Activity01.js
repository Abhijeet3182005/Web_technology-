const heros = ['a','c','s'];
console.log(heros);

const b = ['q','w','r'];
heros.push(b)
console.log(heros);


console.log(heros[2]);


console.log(heros[3][2]); // 

// array concatination 

const arr2 = heros.concat(b); // add 2 array in one arrays 
console.log(arr2);

// const arr3=  [1,2,3,[4,5,6],7 ,8,[9,10,11]];
const arr3=  [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(arr3);

const arr4 = arr3.flat(Infinity);// flatten all levle not matter how deep
console.log(arr4);

console.log("\n\n")
const arr5 = arr3.flat(1);// how deep a nested aray should be flatten default value is 1
console.log(arr4);

// flat does not chaage original arrar return new array used in nested array 

// data scrippting using this methos 

console.log(Array.isArray("Atharv"));// check the given  is array ..

console.log(Array.from("atharv")); // converts an iteratable objects like string , set ,map into an array 

console.log(Array.from({name :"Atharv"}));

console.log(Object.keys({name: "Atharv"}));

console.log(Object.values({name:"Atharv"}));

//const 
let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));// create the new arrar form the give diffe

// array.of - convert values array.from