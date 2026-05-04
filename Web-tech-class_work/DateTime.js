/* =====================================================
   File: DateTime.js
   Topic: Date & Time in JavaScript
   Purpose: Practice + Understand real-world usage
===================================================== */

/* =========================
   WHY DATE & TIME METHODS?
========================= */

/*
Why we use Date/Time methods:
- Track user activity (login/logout)
- Store timestamps in databases
- Show current date & time
- Calculate deadlines, expiry, age
- Sort data based on time
*/


/* =========================
   CREATING DATE OBJECT
========================= */

// Current date & time
let now = new Date();
console.log(now);

// Specific date (YYYY, MM-1, DD)
let customDate = new Date(2025, 0, 26); // Jan = 0
console.log(customDate);

// Date from string
let dateFromString = new Date("2025-01-26");
console.log(dateFromString);


/* =========================
   DATE GET METHODS
========================= */

let today = new Date();

console.log(today.getFullYear()); // Year
console.log(today.getMonth());    // Month (0-11)
console.log(today.getDate());     // Day of month
console.log(today.getDay());      // Day of week (0-Sun)
console.log(today.getHours());    // Hours
console.log(today.getMinutes());  // Minutes
console.log(today.getSeconds());  // Seconds
console.log(today.getMilliseconds());


/* =========================
   DATE SET METHODS
========================= */

let d = new Date();

d.setFullYear(2030);
d.setMonth(11); // December
d.setDate(25);

console.log(d);


/* =========================
   FORMATTING DATE
========================= */

// toDateString()
console.log(today.toDateString());

// toTimeString()
console.log(today.toTimeString());

// toLocaleDateString()
console.log(today.toLocaleDateString());

// toLocaleTimeString()
console.log(today.toLocaleTimeString());


/* =========================
   TIMESTAMPS EXPLAINED
========================= */

/*
WHAT IS A TIMESTAMP?
- Number of milliseconds passed since
  1 Jan 1970 (Unix Epoch)
*/

let timestamp = Date.now();
console.log(timestamp);

// Using getTime()
let timeFromDate = today.getTime();
console.log(timeFromDate);


/* =========================
   WHY TIMESTAMPS ARE USED
========================= */

/*
- Easy to store in DB
- Easy to compare times
- Timezone independent
- Fast calculations
*/


/* =========================
   TIMESTAMP EXAMPLES
========================= */

// Example 1: Time difference (in seconds)
let start = Date.now();

// simulate delay
setTimeout(() => {
  let end = Date.now();
  console.log("Time taken (sec):", (end - start) / 1000);
}, 1000);


// Example 2: Check expiry (OTP / session)
let otpGeneratedAt = Date.now();
let expiryTime = 5 * 60 * 1000; // 5 minutes

if (Date.now() - otpGeneratedAt < expiryTime) {
  console.log("OTP is valid");
} else {
  console.log("OTP expired");
}


// Example 3: Age calculation
let dob = new Date("2006-01-01");
let age = new Date().getFullYear() - dob.getFullYear();
console.log("Age:", age);


/* =========================
   REAL-WORLD / COMPANY USAGE
========================= */

/*
1. Login timestamp (Amazon, Flipkart)
2. Order placed time
3. Chat message time (WhatsApp)
4. Session expiry (Banking apps)
5. Sorting posts (Instagram, LinkedIn)
*/


/* =========================
   INTERVIEW QUESTIONS
========================= */

/*
Q: Why month starts from 0 in JS?
A: Legacy design (0 = January)

Q: Difference between Date.now() and new Date()?
A:
- Date.now() → timestamp (number)
- new Date() → Date object

Q: Why timestamps preferred in backend?
A:
- Timezone safe
- Easy comparison
*/
