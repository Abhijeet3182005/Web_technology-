/* =====================================================
   File: array.js
   Topic: Functions + Array Methods
   Goal: Master arrays with real examples
===================================================== */

/* =========================
   FUNCTIONS BASICS
========================= */

/*
Why functions?
- Reusability
- Clean code
- Avoid repetition
*/

// Normal function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Digvijay"));


// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10));


/* =========================
   ARRAY BASICS
========================= */

let arr = [10, 20, 30, 40, 50];
console.log(arr);

// can access elements as
console.log(arr[0]); // 10

//we ca update values like this 
arr[0] = 100;
console.log(arr);



/* =========================
   ARRAY ADD / REMOVE
========================= */

// push() → add at end
arr.push(60);
console.log(arr);

// pop() → remove from end
arr.pop();
console.log(arr);

// unshift() → add at start
arr.unshift(5);
console.log(arr);

// shift() → remove from start
arr.shift();
console.log(arr);


/* =========================
   ARRAY SEARCH METHODS
========================= */

// includes()
console.log(arr.includes(30)); // true

// indexOf()
console.log(arr.indexOf(40)); // index

// find()
let found = arr.find(num => num > 25);
console.log(found);

// findIndex()
let idx = arr.findIndex(num => num > 25);
console.log(idx);


/* =========================
   ARRAY TRANSFORMATION
========================= */

// map()
/*
Why used:
- Transform array without changing original
Real-world:
- Prices with GST, scores, UI data
*/
let doubled = arr.map(num => num * 2);
console.log(doubled);

// filter()
/*
Why used:
- Select specific elements
Real-world:
- Active users, passed students
*/
let filtered = arr.filter(num => num > 25);
console.log(filtered);

// reduce()
/*
Why used:
- Reduce array to single value
Real-world:
- Cart total, sum, max
*/
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);


/* =========================
   ARRAY ITERATION
========================= */

// forEach()
arr.forEach((value, index) => {
  console.log(index, value);
});


/* =========================
   ARRAY SORTING
========================= */

// sort()
let nums = [5, 100, 25, 1];
nums.sort((a, b) => a - b); // ascending
console.log(nums);

// reverse()
nums.reverse();
console.log(nums);


/* =========================
   ARRAY SLICE & SPLICE
========================= */

// slice() → does NOT change original
let sliced = arr.slice(1, 4);
console.log(sliced);

// splice() → changes original
arr.splice(2, 1, 99);
console.log(arr);


/* =========================
   ARRAY JOIN & SPLIT
========================= */

let words = ["JavaScript", "is", "awesome"];
let sentence = words.join(" ");
console.log(sentence);

// split()
let chars = sentence.split(" ");
console.log(chars);


/* =========================
   REAL-WORLD PRACTICE
========================= */

// 1. Cart total
let cart = [200, 150, 300];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log("Cart Total:", total);


// 2. Passed students
let marks = [35, 80, 45, 90, 20];
let passed = marks.filter(m => m >= 40);
console.log("Passed:", passed);


// 3. User names formatting
let users = ["rahul", "amit", "sneha"];
let capitalUsers = users.map(
  name => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalUsers);


/* =========================
   INTERVIEW QUICK NOTES
========================= */

/*
map vs forEach:
- map returns new array
- forEach does not

slice vs splice:
- slice → non-destructive
- splice → destructive

filter vs find:
- filter → multiple values
- find → first match only

about ARRAY :
  1.array elemetns still change when array is declared using const keyword
    but not reassign the array like const arr = [1,2,3]  arr = [4,5,6]  not allowed
  2 let a = [1,2,3];
let b = a; 👉 Here:
The array [1,2,3] is created in memory.
a stores a reference (address) to that array.b = a means b gets the same reference, not a copy.
So both a and b point to the same array
 
3.to make the array empty :
a.length = 0 or a.splice(0,a.length)
and a = []  this will not work as it reassign the array
there is difference between a = [] and a.length = 0

4.⭐ 4️⃣ Remove duplicates
let unique = [...new Set(arr)];

5.copy an array
  i.shallow copy :let copy = arr.slice(); or let copy = [...arr] spread operator;
  ii.DEEP COPY⭐ 1. Using structuredClone() (Best modern way)
   let a = [{name:"John"}];
   let b = structuredClone(a);

6.merge arrays
  let arr1 = [1,2];  let arr2 = [3,4];
  let merged = [...arr1, ...arr2]; // [1,2,3,4]

7.⭐ 7️⃣ Convert string to array
"hello".split(""); // ['h','e','l','l','o']

8.⭐ 8️⃣ Check if variable is array
Array.isArray(var);

9.⭐ 8️⃣ Reverse array without reverse()
let rev = [...arr].sort((a,b) => b-a);

10.⭐ 9️⃣ Flatten nested array
arr.flat();

11.⭐ 🔟 Array type checking (Very famous trap)
Array.isArray(arr)
👉 Because:  typeof arr === "object"

12.[1,2] == [1,2]
👉 false (different references)

13. dieffrence in js arrays and other languages arrays
   1️⃣ Size
JavaScript Array → Dynamic (size can change anytime)
Other Languages → Mostly fixed size (especially C, C++)
   2️⃣ Types
JavaScript Array → Can hold mixed types (numbers, strings, objects)
Other Languages → Usually single type (e.g., int[], String[])
   3️⃣ Methods   
JavaScript Array → Rich built-in methods (map, filter, reduce)


14. console.log(a); // gives undefined

15.✅ 4️⃣ Sparse Arrays
let arr = [];
arr[5] = 10;
👉 JS allows empty index gaps

16.✅ 5️⃣ Length Property Trick
let arr = [1,2,3,4];
arr.length = 2; // now arr is [1,2]

17.✅ 🔟 Array Destructuring
let [a,b] = [10,20];
console.log(a,b); // 10 20


*/
