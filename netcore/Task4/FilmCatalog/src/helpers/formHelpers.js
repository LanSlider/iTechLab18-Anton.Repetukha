const passwordLength = 6;
const usernameLength = 6;
const commentLength = 2;
const errInvalidFieldMessage = "Invalid field";
const errInvalidLengthFieldMessage = (length)=> `Field must be at least ${length} characters`
const errInvalidPasswordConfirm = "Password and password confirm don't coincide";

export const validateName = (name) => {
    const res = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

    if(!name ||name.length < 6) {
        return errInvalidLengthFieldMessage(usernameLength);
    }
    if(!res.test(String(name))) {
        return errInvalidFieldMessage;
    }
    return "";
}

export const validateEmail = (email) => {
    const res = /^(([^<>()\]\\.,;:|%^&#$!?*~=+\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !res.test(String(email).toLowerCase()) || !email
        ? errInvalidFieldMessage 
        : "";
}

export const validatePassword = (password) => {
    return !password || password.length < passwordLength 
        ? errInvalidLengthFieldMessage(passwordLength) 
        : "";
}

export const validatePasswordConfirm = (password, passwordConfirm) => {
    debugger;
    return (!passwordConfirm.password && !passwordConfirm.passwordConfirm) 
        || (passwordConfirm.password !== passwordConfirm.passwordConfirm) 
        ? errInvalidPasswordConfirm 
        : "";
}

export const validateComment = (comment) => {
    const res = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

    if(!comment ||comment.length < 2) {
        return errInvalidLengthFieldMessage(commentLength);
    }
    if(!res.test(String(comment).toLowerCase()) ) {
        return errInvalidFieldMessage;
    }   
    return "";
}