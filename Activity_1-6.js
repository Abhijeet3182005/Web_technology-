// Activity 1: Using const, let, var

const a = 10;
console.log(a);
document.write(a + "<br>");

// a = 20;  Not allowed (const)

// Use let for changeable values
let ab = 20;
console.log(ab);
document.write(ab + "  ");

ab = 30; //  Allowed
console.log(ab);
document.write(ab + " ");

var a1 = 200;
console.log(a1);
document.write(a1 + " ");


//------------------------------------------

//Activity 2 = perform opration using the let ,const ,var ,and block of scope 
// Activity 2: Scope demonstration

var x = 50;
let y = 60;

{
    var x = 100;   // overwrites global x
    let y = 300;   // block scoped
    console.log("Inside block:", x, y);
}

console.log("Outside block:", x, y);
document.write("Outside block: " + x + " " + y + "</\ ");


//-----------------------------------------

//Activity 3 = declare Datatypes and then code for the display the student information 


let name1  = "abhijeet";
document.write(name1+"--> type --> "+typeof(name1)+"  ");
console.log(name1+"--> type --> "+typeof(name1));

let age  = 20;
document.write(age+"--> type --> "+typeof(age));

console.log(age+"--> type --> "+typeof(age));


//Activity 4 = check the number is even or odd
let number = 20 ;
if(number%2==0){
    document.write(num)
    console.log("Number is even")
}