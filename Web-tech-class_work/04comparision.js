// Topic: Comparison Operators

// Basic number comparisons

console.log(2 > 3);
// false → 2 is NOT greater than 3

console.log(2 < 3);
// true → 2 is less than 3

console.log(2 >= 2);
// true → 2 is equal to 2

console.log(2 <= 1);
// false → 2 is greater than 1

console.log(2 == 2);
// true → values are equal

console.log(2 != 3);
// true → 2 is not equal to 3



// String and number comparison
console.log("2" > 1);
// true → "2" is converted to number 2 → 2 > 1

console.log("02" > 1);
// true → "02" is converted to number 2 → 2 > 1



// null comparisons
console.log(null > 0);
// false → null is converted to 0 → 0 > 0 is false

console.log(null == 0);// converted to undefined only for ==
// false → null is ONLY equal to undefined, not 0

console.log(null <= 0);
// true → null is converted to 0 → 0 <= 0 is true



// undefined comparisons
console.log(undefined > 0);
// false → undefined becomes NaN → comparison is false

console.log(undefined < 0);
// false → NaN comparison is always false

console.log(undefined == 0);
// false → undefined is NOT equal to 0



// Strict comparison
console.log("2" === 2);
// false → string "2" and number 2 have different data types


