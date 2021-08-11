const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const retypePass = document.getElementById('retype-password');

// if input is invalid
function displayError(input, msg) {
    input.parentElement.className = 'form-control error';
    const small = input.parentElement.querySelector('small');
    small.innerText = msg;
}

// if input is valid
function displaySuccess(input) {
    input.parentElement.className = 'form-control success';
}

// check input
function checkInput(input) {
    if (input.value == '') {
        displayError(input, 'is required!');
    } else {
        displaySuccess(input);
    }
}

// check email
function check_email(input) {
    if (input.value == '') {
        displayError(input, 'email is required!');
    } else if (!input.value.match(/\S+@\S+\.\S+/)) {
        // Jaymon's / Squirtle's solution
        displayError(input, 'Enter a valid email!');
    } else if (
        input.value.indexOf(' ') != -1 ||
        input.value.indexOf('..') != -1
    ) {
        displayError(input, 'Enter a valid email!');
    } else displaySuccess(input);
}

// check password length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        displayError(
            input,
            `${input.id} length must be ${min} characters long!`
        );
    } else if (input.value.length > max) {
        displayError(
            input,
            `${input.id} length must be less than ${max} characters!`
        );
    } else displaySuccess(input);
}

// check if password matches
function checkPassMatch(inputOne, inputTwo) {
    if (inputTwo.value == '') {
        displayError(inputTwo, `re-type your password`);
    } else if (inputOne.value != inputTwo.value) {
        displayError(inputTwo, `Password doesn't match`);
    } else displaySuccess(inputTwo);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkLength(userName, 4, 15);
    check_email(email);
    checkLength(password, 8, 20);
    checkPassMatch(password, retypePass);
});
