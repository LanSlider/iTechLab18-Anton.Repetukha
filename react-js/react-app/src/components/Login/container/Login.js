import React, { Component } from 'react/index.js';
import LoginView from '../view/index';

const passwordLength = 6;
const errInvalidEmailMessage = "Invalid email";
const errInvalidLengthPassMessage = `Password must be at least ${passwordLength} characters`;

class Login extends Component {  
    constructor(props) {
        super(props); 
        this.state = { 
            email: "", 
            password: "", 
            errorEmailMessage: "",
            errorPassMessage: "",
            isEmailValidate: "default",
            isPasswordValidate: "default",
            isSubmitBtnEnable: false,
        };
    }

    onEmailChange = ((event) => {
        let value = event.target.value;
        this.setState({ email: value });
        this.validateEmail(value);
    })

    onPasswordChange = ((event) => {
        let value = event.target.value;
        this.setState({ password: value });
        this.validatePassword(value);
    })

    validateEmail = ((email) => {
        const re = /^(([^<>()\]\\.,;:|%^&#$!?*~=+\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            this.setState({ errorEmailMessage: errInvalidEmailMessage, isEmailValidate: false });
        } 
        else {
            this.setState({ errorEmailMessage: "", isEmailValidate: true });
        }
    })

    validatePassword = ((password) => {
        if(password.length < passwordLength ) {
            this.setState({ errorPassMessage: errInvalidLengthPassMessage, isPasswordValidate: false})
        }
        else {
            this.setState({ errorPassMessage: "", isPasswordValidate: true });
        }
    })

    handleSubmit = ((event) => {
        event.preventDefault();
        if(this.state.isEmailValidate === true && this.state.isPasswordValidate === true) {
            console.log(`Email: ${this.state.email} \nPassword: ${this.state.password}`);
            this.setState({ email: "", password: "", isEmailValidate: "default", isPasswordValidate: "default" });
        }
    })

    render() {
      return <LoginView 
        email = {this.state.email}
        password = {this.state.password}
        onEmailChange = {this.onEmailChange}
        onPasswordChange = {this.onPasswordChange}
        handleSubmit = {this.handleSubmit}
        isEmailValidate = {this.state.isEmailValidate}
        isPasswordValidate = {this.state.isPasswordValidate}
        isSubmitBtnEnable = {this.state.isEmailValidate === true && this.state.isPasswordValidate === true}
        errorEmailMessage = {this.state.errorEmailMessage}
        errorPassMessage = {this.state.errorPassMessage}
      />
  }
}

export default Login