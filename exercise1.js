let firstPassword  = document.getElementById("pwd1");
let secondPassword = document.getElementById("pwd2");
let info           = document.getElementById("info");
let validateBtn    = document.getElementById("validate-btn");
let submitBtn      = document.getElementById("submit-btn");

function comparePasswords()
{
    let result = (firstPassword.value == secondPassword.value);
    if (firstPassword.value == "" || secondPassword.value == "") { 
        result = false; 
    }

    console.log(result);

    if (result)
        info.innerText = "";
    else
        info.innerText = "The passwords do not match.";

    return result;
}

firstPassword.oninput = function() {
    comparePasswords();
}

secondPassword.oninput = function() {
    comparePasswords();
};

validateBtn.onclick = function() {
    comparePasswords();
}

submitBtn.onclick = function() {
    if (comparePasswords())
        alert("Success! Both passwords match and we can continue to the next step.");
    else 
        alert("Error! The passwords are blank or do not match, please go back and fix it.");
}



