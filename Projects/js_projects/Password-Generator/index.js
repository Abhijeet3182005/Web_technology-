

document.addEventListener("DOMContentLoaded", function () {

    let result = document.getElementById("result");
    let btn = document.getElementById("generateBtn");

    btn.addEventListener("click", handleGenerate);

    function handleGenerate() {

        let firstName = document.getElementById("firstName").value.trim();
        let surname = document.getElementById("surname").value.trim();
        let dob = document.getElementById("dob").value;
        let mobile = document.getElementById("mobile").value.trim();

        if (firstName === "" || surname === "" || dob === "" || mobile === "") {
            result.innerText = "Please fill all fields";
            return;
        }

        if (mobile.length < 10) {
            result.innerText = "Mobile number must be at least 10 digits";
            return;
        }

        result.innerText = "Generating strong and secure password...";

        setTimeout(function () {
            generatePassword(firstName, surname, dob, mobile);
        }, 1000);
    }

    function generatePassword(firstName, surname, dob, mobile) {

        new Promise(function (resolve) {

            let birthYear = new Date(dob).getFullYear();
            let birthDate = new Date(dob).getDate();

            let firstHalf = firstName.slice(0, Math.ceil(firstName.length / 2));
            let secondHalf = surname.slice(0, Math.ceil(surname.length / 2));

            let symbols = "!@#$%^&*";
            let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

            let lastTwoMobile = mobile.slice(-5);

            let password =
                firstHalf +
                secondHalf +
                randomSymbol +
                birthDate +
                birthYear +
                lastTwoMobile;

            resolve(password);

        }).then(function (finalPassword) {

            result.innerText = "Generated Strong Password: " + finalPassword;

            localStorage.setItem("lastGeneratedPassword", finalPassword);

        });

    }

});
