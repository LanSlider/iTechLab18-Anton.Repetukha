import React, { Component } from 'react';
import LoginSuccessView from '../view/viewSuccess';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { email: state.login.email, password: state.login.password };
};

class LoginReduxSuccess extends Component {  
    render() {
        if(this.props.isDataSubmit === true) {
            this.props.submitData();
            return <Redirect to="/login-redux/success" />
        }
        if(!this.props.email || !this.props.password) {
            return <Redirect to="/login-redux/" />
        }
        return <LoginSuccessView email={this.props.email} password={this.props.password} />
  }
}

export default connect(mapStateToProps)(LoginReduxSuccess);