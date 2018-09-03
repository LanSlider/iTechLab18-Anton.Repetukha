import React from 'react';
import { connect } from "react-redux";
import { logOutUser } from "../../../actions/index";

class LogOut extends React.PureComponent  {  
    handle = () => {
        this.props.logOutUser();
    }

    render() {
        return (<div onClick={this.handle}>Выйти</div>);
  }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutUser: () => dispatch(logOutUser())
    };
};

export default connect(null, mapDispatchToProps)(LogOut);