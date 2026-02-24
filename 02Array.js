const superhero = ["thor", "shaktiman" ]
const hero = ["Hulk"]

superhero.push(hero);
console.log(superhero);

console.log(superhero[2]);
console.log(superhero[1][3]);

const star = superhero.concat(hero)
console.log(star);

const arr2 = [1,2,3,[4,5,6],7,8,9,[2,[5,3],2],[2,7],9,0,5]; // nested array 
console.log(arr2);

const arr1 = arr2.flat(Infinity); // flaten all leavels no maters how deep  
console.log(arr1); 

const arr3 = arr2.flat(1); // used for the nested array 
console.log(arr3);   // specify how to the nested array should be flaten default value is 1
// Flat doesnot change in original array it used in returns new array 

// Data scripting using this this methods that --

console.log(Array.isArray("thor")); // check even values is in array or not 

console.log(Array.from("abhijeet")); // converts an iteratable objects likes same maps and into an iterative array 

console.log(Array.from({Object:"abhijeet"}));

console.log(Object.keys = "abhijeet");


let score1 = 100 ; 





