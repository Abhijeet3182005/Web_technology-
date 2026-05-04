
// 1.  difference between let const and var

const a = 10;
// a = 20; it will gives error beacause const variables not reassign 
console.log(a) // throws error 



// difference between  let and var
var b = 30;
let c = 40;
{
    b = 51; // values changes to 30 to 31 for all over the code 
    let c = 41; //values changes to 40 to 41  only scope of the block  

    console.log(b); // this will print 51
    console.log(c); // this will print 41
}
console.log(b); // this will print 51
console.log(c); // this will print 40
// always use let for declaring the variables 




// 2. Types of Data

// Primitive Data Types
let num = 10;               // Number
let name = "JavaScript";    // String
let isActive = true;        // Boolean
let value = null;           // Null
let data;                   // Undefined

// Non-Primitive Data Types
let arr = [1, 2, 3];        // Array
let obj = { city: "Pune" }; // Object
function greet() {}         // Function

// 3. declaring variables with different datatypes
//checking types  of variables
let z = 10000;
let b = "Digvijay";
let istrue = true;
let x= null;
let d 
console.log(typeof(z)+" "+typeof(b)+" "+typeof(istrue)+" "+typeof(x)+" "+typeof(d));


// 4. Difference between null and undefined

// undefined:
let p;
console.log(p); // undefined

// null:
let q = null;
console.log(q); // null

// typeof behavior
console.log(typeof p); // undefined
console.log(typeof q); // object (JavaScript bug)
