function SubmitButtonClick(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerHTML= "";
    document.getElementById("emailError");
    document.getElementById("passwordError");

    let isvalid = true;

    if (name == ""){
        document.getElementById("nameError").innerHTML="name field is required";
        isvalid = false;
    }

    if (email == ""){
        document.getElementById("emailError").innerHTML="email field is required";
        isvalid = false;
    }

    if (email != "@"){
        document.getElementById("emailError").innerHTML="Email is incorrect";
        isvalid = false;
    }

    if (password <=6){
        document.getElementById("passwordError").innerHTML="Password is doesnot match size";
    }

    


}