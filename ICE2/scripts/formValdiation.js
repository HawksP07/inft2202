console.log("formValidation.js loaded");

let username = document.getElementById("usernameInput");
let usernameErrors = document.getElementById("usernameError");

let email = document.getElementById("inputEmail4");
let emailErrors = document.getElementById("emailError");

let password = document.getElementById("inputPassword4");
let passwordErrors = document.getElementById("passwordError");

let phone = document.getElementById("inputPhone5");
let phoneErrors = document.getElementById("phoneError");

let registrationForm = document.getElementById("registration-form");

let generalErrors = document.getElementById("generalError");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}

// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// Function got from: https://stackoverflow.com/questions/9628879/javascript-regex-username-validation
function validateUsername(usernameString){
    var nameRegex = /^[a-zA-Z0-9]+$/;
    
    return !!usernameString && typeof usernameString === 'string'
        && usernameString.match(nameRegex);
}


//TODO:
// Make all fields required (HTML)
function handleFormSubmit(){
    // Assume all fields are invalid
    let isValid = false;

    // Get all elements with a validation class
    let hasInvalidClass = document.getElementsByClassName("is-invalid");
    let hasValidClass = document.getElementsByClassName("is-valid");


    // Remove classes for new validations
    for (var i = 0; i < hasInvalidClass.length; i++){
        hasInvalidClass[i].classList.remove("is-invalid");
    }

    for(var i = 0; i < hasValidClass.length; i++){
        hasValidClass[i].classList.remove("is-valid");
    }


    //Add is-invalid when field is invalid
    // Validate the username when the form is submitted
    // Clear any additional error message and highlighting when the form is reset
    if(username.value.length <= 0 || !validateUsername(username.value)){
        username.classList.add("is-invalid");
        usernameErrors.textContent = "Error, please enter a username";
        username.value = "";
    }
    else{
        username.classList.add("is-valid");
        usernameErrors.textContent = "";
    }

    if(email.value.length <= 0 || validateEmailAddressRegex(email.value)){
        email.classList.add("is-invalid");
        emailErrors.textContent = "Error, please enter an email.";
        email.value = "";
    }
    else{
        email.classList.add("is-valid");
        emailErrors.textContent = "";
    }

    if(password.value.length <= 0){
        password.classList.add("is-invalid");
        password.value = "";
        passwordErrors.textContent = "Error, please enter a password.";
    }
    else{
        password.classList.add("is-valid");
        passwordErrors.textContent = "";
    }

    if(phone.value.length <= 0){
        phone.classList.add("is-invalid");
        phoneErrors.textContent = "Error, please enter a phone number";
        phone.value = "";
    }
    else{
        phone.classList.add("is-valid");
        phoneErrors.textContent = "";
    }

    //Select all error elements
    let errorElements = registrationForm.getElementsByClassName("is-invalid");

    //
    if(errorElements.length > 0){
        alert("Please correct errors");
        generalErrors.textContent = "There are some errors, please correct them."
        return false;
    }

    generalErrors.textContent = "";
    return true;

}
// Add a pattern attribute in the telephone element (HTML)
phone.type = "tel";
phone.placeholder = "123-456-7890";
// Ensure the password is redacted into dots on screen when typed in (HTML)
password.type = "password";
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)


// COMMENT EVERYTHING :D
