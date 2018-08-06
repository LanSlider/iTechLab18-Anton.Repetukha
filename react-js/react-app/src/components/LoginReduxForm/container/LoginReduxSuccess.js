import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginSuccessView from '../view/viewSuccess'

const mapStateToProps = state => {
    return { email: state.login.email, password: state.login.password };
};

class LoginReduxSuccess extends Component {  
    render() {
        return <LoginSuccessView email={this.props.email} password={this.props.password} />
    } 
}

export default connect(mapStateToProps)(LoginReduxSuccess);