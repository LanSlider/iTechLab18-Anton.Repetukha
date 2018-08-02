import React, { Component } from 'react/index.js';
import LoginReduxView from '../view/index';
import { addEmail, addPassword } from "../../../actions/loginRedux";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const passwordLength = 6;
const errInvalidEmailMessage = "Invalid email";
const errInvalidLengthPassMessage = `Password must be at least ${passwordLength} characters`;

const mapDispatchToProps = dispatch => {
    return {
        addEmail: email => dispatch(addEmail(email)),
        addPassword: password => dispatch(addPassword(password))
    };
};

class LoginRedux extends Component {  
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
            isSubmitFormSuccess: false
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
            this.setState({ errorEmailMessage: errInvalidEmailMessage, isEmailValid: false });
        } 
        else {
            this.setState({ errorEmailMessage: "", isEmailValid: true });
        }
    })

    validatePassword = ((password) => {
        if(password.length < passwordLength ) {
            this.setState({ errorPassMessage: errInvalidLengthPassMessage, isPasswordValid: false})
        }
        else {
            this.setState({ errorPassMessage: "", isPasswordValid: true });
        }
    })

    handleSubmit = ((event) => {
        event.preventDefault();
        if(this.state.isEmailValid === true && this.state.isPasswordValid === true) {
            console.log(`Email: ${this.state.email} \nPassword: ${this.state.password}`);
            this.props.addEmail(this.state.email);
            this.props.addPassword(this.state.password);
            this.setState({ email: "", password: "", isEmailValid: "default", isPasswordValid: "default", isSubmitFormSuccess: true });
        }
        // return false;
    })

    render() {
        if(this.state.isSubmitFormSuccess) {
            return <Redirect to="/login-redux/success" />
        }
        return <LoginReduxView 
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

const Login = connect(null, mapDispatchToProps)(LoginRedux);

export default Login