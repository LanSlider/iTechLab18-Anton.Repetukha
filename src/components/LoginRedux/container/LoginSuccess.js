import React, { Component } from 'react';
import LoginSuccessView from '../view/success';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { email: state.login.email, password: state.login.password };
};

class LoginReduxSuccess extends Component {  
    componentWillMount() {
        if(!this.props.email || !this.props.password) {
            this.props.history.push(`/login-redux`);
        }
    }

    render() {
        return <LoginSuccessView email={this.props.email} password={this.props.password} />
    }
}

export default connect(mapStateToProps)(LoginReduxSuccess);