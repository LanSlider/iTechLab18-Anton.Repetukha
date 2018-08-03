import React, { Component } from 'react/index.js';
import LoginReduxFormView from '../view/index';
import { changeEmail, changePassword, submitData, resetData } from "../../../actions/loginRedux";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { validateEmail, validatePassword } from '../../../constants/ValidateForm';

const mapDispatchToProps = dispatch => {
    return {
        changeEmail: email => dispatch(changeEmail(email)),
        changePassword: password => dispatch(changePassword(password)),
    };
};

const mapStateToProps = state => {
    return {
        formState: { ...state.form.login},
        state: state
    }
};

class LoginReduxForm extends Component {  
    constructor(props) {
        super(props); 
        this.state = {
            isDataSubmit: false
        }
    }

    validateValues = values => {
        const errors = {};

        let errorEmailMessage = "";
        if(values.email) {
            errorEmailMessage = validateEmail(values.email);
        } 
        // else {
        //     errorEmailMessage = 'Required';
        // }
        let errorPassMessage = "";
        if(values.password) {
            errorPassMessage = validatePassword(values.password);
        } 
        // else {
        //     errorPassMessage = 'Required';
        // }
        if(errorEmailMessage !== "") {
            errors.email = errorEmailMessage;
        }
        if(errorPassMessage !== "") {
            errors.password = errorPassMessage;
        }
        return errors
    }

    handleSubmit = values => {
            this.props.changeEmail(values.email);
            this.props.changePassword(values.password);
            this.setState({isDataSubmit: true})
    }

    render() {
        let {email, password} = this.props.formState.values? this.props.formState.values : '';
        if(this.state.isDataSubmit) {
            this.setState({isDataSubmit: false})
            return <Redirect to="/login-redux-form/success" />
        }
        return <LoginReduxFormView 
            onSubmit = {this.handleSubmit}
            email = {email}
            password = {password}
            validate = {this.validateValues}
        />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm);