import React from 'react';
import LogInView from '../view';
import { connect } from "react-redux";
import { validateName, validatePassword } from '../../../helpers/formHelpers';
import { logInUser, willLogInUser } from "../../../actions/index";

class LogIn extends React.PureComponent  {  
    constructor(props) {
        super(props); 

        this.state = { isDialog: props.isDialog }
    }

    validateValues = values => {
        const errors = {};

        let errorNameMessage = "";
        if(values.username) {
            errorNameMessage = validateName(values.username);
        } 
        let errorPassMessage = "";
        if(values.password) {
            errorPassMessage = validatePassword(values.password);
        } 
        if(errorNameMessage !== "") {
            errors.username = errorNameMessage;
        }
        if(errorPassMessage !== "") {
            errors.password = errorPassMessage;
        }
        return errors
    }

    handleSubmit = values => {
            const userData = {
                username: values.username,
                password: values.password
            }  

            this.props.logInUser(userData);
            this.props.willLogInUser();

            if(!this.props.isDialog) {
                this.props.history.push(`/`);
            }
            else {
                this.props.handleClick();
            }
    }

    render() {
        let {username, password} = this.props.formState.values? this.props.formState.values : "";
        [username, password] = username && password? [username, password] : [username = "", password = ""];
        return <LogInView 
            onSubmit = {this.handleSubmit}
            username = {username}
            password = {password}
            validate = {this.validateValues}
            isDialog = {this.state.isDialog}
        />
  }
}

const mapDispatchToProps = dispatch => {
    return {
        logInUser: userData => dispatch(logInUser(userData)),
        willLogInUser: () => dispatch(willLogInUser())
    };
};

const mapStateToProps = state => {
    return {
        formState: { ...state.form.login},
        state: state
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);