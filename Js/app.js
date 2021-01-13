let form = document.querySelector('.form')
let firstname = document.querySelector('#firstname')
let lastname = document.querySelector('#lastname')
let email = document.querySelector('#email')
let password1 = document.querySelector('#password1')
let password2 = document.querySelector('#password2')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
})


function addErrorMsg(input, message) {
    let formControl = input.parentElement;
    let smalltext = formControl.querySelector('small')
    smalltext.innerHTML = message
    formControl.classList.remove('success')
    formControl.classList.add('error');
}

function addSuccessMsg(input) {
    let formControl = input.parentElement;
    formControl.classList.remove('error')
    formControl.classList.add('success');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInputs() {
    if (firstname.value.trim() === '') {
        addErrorMsg(firstname, 'Field cannot be empty!');
    } else {
        addSuccessMsg(firstname);
    };

    if (lastname.value.trim() === '') {
        addErrorMsg(lastname, 'Field cannot be empty!');
    } else {
        addSuccessMsg(lastname);
    };

    if (email.value.trim() === '') {
        addErrorMsg(email, 'Email field cannot be empty')
    }
    else if (!validateEmail(email.value.trim())) {
        addErrorMsg(email, 'Looks like this is not a valid email')
    } else {
        addSuccessMsg(email)
    };

    if (password1.value.trim() === '') {
        addErrorMsg(password1, 'Password cannot be empty')
    }
    else if (password1.value.trim().length < 6) {
        addErrorMsg(password1, 'Password too short')
    }
    else {
        addSuccessMsg(password1)
    };

    if (password2.value.trim() === '') {
        addErrorMsg(password2, 'Password cannot be empty')
    }
    else if (password2.value.trim().length < 6) {
        addErrorMsg(password2, 'Password too short')
    }
    else if (password2.value.trim() !== password1.value.trim()) {
        addErrorMsg(password2, 'Passwords do not match')
    }
    else {
        addSuccessMsg(password2)
    };
}