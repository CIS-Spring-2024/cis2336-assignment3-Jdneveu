//functions to validate input details.//
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var addressError = document.getElementById('address-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write first & last name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone # is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone # should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}    

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML = 'Email Invalid'
            return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateAddress(){
    var address = document.getElementById('contact-address').value;

    if(address.length == 0){
        addressError.innerHTML = 'Address is required'
        return false;
    }

    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//alert message & confirmation that all inputs are valid//
function alertMessage() {
    var nameValid = validateName();
    var emailValid = validateEmail();
    var phoneValid = validatePhone();
    var addressValid = validateAddress();

    if (nameValid && emailValid && phoneValid && addressValid) {
        alert("Order has been submitted!");
    }
}
