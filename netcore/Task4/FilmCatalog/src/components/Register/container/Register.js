import React, { Component } from 'react';
import RegisterView from '../view';
import { connect } from "react-redux";
import { validateEmail, validatePassword, validateName, validatePasswordConfirm } from '../../../helpers/formHelpers';
import { registerUser } from "../action/registerAction";

class Register extends Component {  
    handleSubmit = values => {
        const userData = {
            username: values.username,
            email: values.email,
            password: values.password,
        }  
        this.props.registerUser(userData);

        this.props.history.push(`/`);
    }

    render() {
        let {username, password, passwordConfirm} = this.props.formState.values? this.props.formState.values : "";
        [username, password, passwordConfirm] = username && password && passwordConfirm? [username, password, passwordConfirm] : [username = "", password = "", passwordConfirm = ""];
        return <RegisterView 
            onSubmit = {this.handleSubmit}
            username = {username}
            password = {password}
            passwordConfirm = {passwordConfirm}
            validate = {this.validateValues}
        />
  }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: userData => dispatch(registerUser(userData)),
    };
};

const mapStateToProps = state => {
    return {
        formState: { ...state.form.register},
        state: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);