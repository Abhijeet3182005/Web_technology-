function add() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (n1 + n2);
}

function subtract() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (n1 - n2);
}

function multiply() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (n1 * n2);
}

function divide() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (n1 / n2);
}

function modulus() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = "Answer: " + (n1 % n2);
}