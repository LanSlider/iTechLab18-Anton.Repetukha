import React, { Component } from 'react/index.js';
import LoginView from '../view/index';
import {validateEmail, validatePassword} from '../../../constants/ValidateForm';

class Login extends Component {  
    constructor(props) {
        super(props); 
        this.state = { 
            email: "", 
            password: "", 
            errorEmailMessage: "",
            errorPassMessage: "",
            isEmailValid: "default",
            isPasswordValid: "default",
            isSubmitBtnEnabled: false,
        };
    }

    onEmailChange = ((event) => {
        let value = event.target.value;
        this.setState({ email: value });
        const emailValidMessage = validateEmail(value); 
        if(emailValidMessage !== '') {
            this.setState({ errorEmailMessage: emailValidMessage, isEmailValid: false });
        }
        else {
            this.setState({ errorEmailMessage: "", isEmailValid: true });
        }
    })

    onPasswordChange = ((event) => {
        let value = event.target.value;
        this.setState({ password: value });
        const passwordValidMessage = validatePassword(value); 
        if(passwordValidMessage !== '') {
            this.setState({ errorPassMessage: passwordValidMessage, isPasswordValid: false });
        }
        else {
            this.setState({ errorPassMessage: "", isPasswordValid: true });
        }
    })

    handleSubmit = ((event) => {
        event.preventDefault();
        if(this.state.isEmailValid === true && this.state.isPasswordValid === true) {
            console.log(`Email: ${this.state.email} \nPassword: ${this.state.password}`);
            this.setState({ email: "", password: "", isEmailValid: "default", isPasswordValid: "default" });
        }
        // return false;
    })

    render() {
      return <LoginView 
        email = {this.state.email}
        password = {this.state.password}
        onEmailChange = {this.onEmailChange}
        onPasswordChange = {this.onPasswordChange}
        handleSubmit = {this.handleSubmit}
        isEmailValid = {this.state.isEmailValid}
        isPasswordValid = {this.state.isPasswordValid}
        isSubmitBtnEnabled = {this.state.isEmailValid === true && this.state.isPasswordValid === true}
        errorEmailMessage = {this.state.errorEmailMessage}
        errorPassMessage = {this.state.errorPassMessage}
      />
  }
}

export default Login