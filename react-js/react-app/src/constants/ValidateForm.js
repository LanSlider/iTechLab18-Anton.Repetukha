const passwordLength = 6;
const errInvalidEmailMessage = "Invalid email";
const errInvalidLengthPassMessage = `Password must be at least ${passwordLength} characters`;

export function validateEmail(email) {
    const re = /^(([^<>()\]\\.,;:|%^&#$!?*~=+\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) {
        return errInvalidEmailMessage;
    } 
    return '';
}

export function validatePassword(password) {
    if(password.length < passwordLength ) {
        return errInvalidLengthPassMessage;
    }
    return '';
}