
//Activity 1: 
//number to string
let number = 33;
console.log(typeof(number)); // "number"
let string = String(number);
console.log(string); // "33"
console.log(typeof string); // "string"

// activity 1 do all convertions 


//string to number
let strs  = "123";
let num = Number(strs);
console.log(num);

//boolean conversoins

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// 4) Other Possible Conversions

// String to Boolean
let text = "JS";
let bool1 = Boolean(text);
console.log(bool1); // true

// Boolean to Number
let isLoggedIn = true;
let numBool = Number(isLoggedIn);
console.log(numBool); // 1

// Number to Boolean
let zeroValue = 0;
console.log(Boolean(zeroValue)); // false

// Null and Undefined conversions
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN






//********** OPERATIONS *********//

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2%2); 

let str = "Hello ";
let str1= "World";
console.log(str + str1); 

console.log("1" + 2);
console.log("1" + 2+2);//first "1"+2 = "12" +2 = "122"
console.log(1 +"2");
console.log(1 + 2 + "2");// first 1+2 =3 + "2" = "32"

/* IMPORTANT NOTE := javascript only automatically convert string to number
   in Arithmatical operations  */ 

console.log(true);// true
console.log(+true);//+ is unary plus It converts the value to a number = 1
console.log(+"");//+ converts to unary Empty string → 0

let gamecounter = 100;
gamecounter++;
console.log(gamecounter);
let scorecnt = 200;

