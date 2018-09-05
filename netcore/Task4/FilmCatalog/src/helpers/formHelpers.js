const passwordLength = 6;
const usernameLength = 6;
const commentLength = 2;
const errInvalidNameMessage = "Invalid name";
const errInvalidLengthNameMessage = `Name must be at least ${usernameLength} characters`
const errInvalidCommentMessage = "Invalid comment";
const errInvalidLengthCommentMessage = `Comment must be at least ${commentLength} characters`
const errInvalidEmailMessage = "Invalid email";
const errInvalidLengthPassMessage = `Password must be at least ${passwordLength} characters`;
const errInvalidPasswordConfirm = "Password and password confirm don't coincide";

export const validateName = (name) => {
    const res = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    if(!res.test(String(name))) {
        return errInvalidNameMessage;
    }
    if(name.length < 6) {
        return errInvalidLengthNameMessage;
    }
    return '';
}

export const validateEmail = (email) => {
    const re = /^(([^<>()\]\\.,;:|%^&#$!?*~=+\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) {
        return errInvalidEmailMessage;
    } 
    return '';
}

export const validatePassword = (password) => {
    if(password.length < passwordLength ) {
        return errInvalidLengthPassMessage;
    }
    return '';
}

export const validatePasswordConfirm = (password, passwordConfirm) => {
    if(password !== passwordConfirm ) {
        return errInvalidPasswordConfirm;
    }
    return '';
}

export const validateComment = (comment) => {
    const res = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    if(!res.test(String(comment).toLowerCase())) {
        return errInvalidCommentMessage;
    } 
    if(comment.length < 2) {
        return errInvalidLengthCommentMessage;
    }
    return '';
}