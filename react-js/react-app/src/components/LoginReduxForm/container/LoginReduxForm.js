import React, { Component } from 'react';
import LoginReduxFormView from '../view';
import { changeEmail, changePassword } from "../../../actions/loginRedux";
import { connect } from "react-redux";
import { validateEmail, validatePassword } from '../../../helpers/formHelpers';

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
    }

    validateValues = values => {
        const errors = {};

        let errorEmailMessage = "";
        if(values.email) {
            errorEmailMessage = validateEmail(values.email);
        } 
        let errorPassMessage = "";
        if(values.password) {
            errorPassMessage = validatePassword(values.password);
        } 
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
            this.props.history.push(`${this.props.history.location.pathname}/success`);
    }

    render() {
        let {email, password} = this.props.formState.values? this.props.formState.values : "";
        email = email? email: email = "";
        password = password? password: password = "";
        return <LoginReduxFormView 
            onSubmit = {this.handleSubmit}
            email = {email}
            password = {password}
            validate = {this.validateValues}
        />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm);