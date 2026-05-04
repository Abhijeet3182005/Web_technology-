// Arrow Function
const add = (a, b) => a + b;

let result = add(10, 20);
document.write(" <br>Addition:", result);

const square = (num) => num * num;

for (let i = 1; i <= 5; i++) {
    document.write("<br> Square of", i, "=", square(i));
}

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

document.write(" <br> Original Array:", numbers);
document.write(" <br>Doubled Array:", doubled);

const numbers1 = [10, 15, 20, 25, 30, 35];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
document.write("<br>Even Numbers:", evenNumbers);


const numbers3 = [10, 20, 30, 40];

const sum = numbers3.reduce((total, num) => total + num, 0);

document.write("<br> Sum:", sum);