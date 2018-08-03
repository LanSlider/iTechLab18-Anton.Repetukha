import React, { Component } from 'react/index.js';
import LoginReduxView from '../view/index';
import { changeEmail, changePassword, validateEmail, validatePassword, submitData, resetData } from "../../../actions/loginRedux";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: email => dispatch(changeEmail(email)),
        changePassword: password => dispatch(changePassword(password)),
        validateEmail: email => dispatch(validateEmail(email)),
        validatePassword: password => dispatch(validatePassword(password)),
        submitData: () => dispatch(submitData()),
        resetData: () => dispatch(resetData())
    };
};

const mapStateToProps = state => {
    return { ...state.login }
};

class LoginRedux extends Component {  
    constructor(props) {
        super(props); 

        this.props.resetData();
    }

    onEmailChange = ((event) => {
        let email = event.target.value;
        this.props.changeEmail(email);
        this.props.validateEmail(email);
    })

    onPasswordChange = ((event) => {
        let password = event.target.value;
        this.props.changePassword(password);
        this.props.validatePassword(password);
    })

    handleSubmit = ((event) => {
        event.preventDefault();  
        this.props.submitData();
    })

    render() {
        if(this.props.isDataSubmit === true) {
            this.props.submitData();
            return <Redirect to="/login-redux/success" />
        }
        return <LoginReduxView 
            email = {this.props.email}
            password = {this.props.password}
            onEmailChange = {this.onEmailChange}
            onPasswordChange = {this.onPasswordChange}
            handleSubmit = {this.handleSubmit}
            isEmailValid = {this.props.isEmailValid}
            isPasswordValid = {this.props.isPasswordValid}
            isSubmitBtnEnabled = {this.props.isEmailValid === true && this.props.isPasswordValid === true}
            errorEmailMessage = {this.props.errorEmailMessage}
            errorPassMessage = {this.props.errorPassMessage}
        />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRedux);