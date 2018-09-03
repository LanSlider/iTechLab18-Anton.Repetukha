import React from 'react';
import AccountMenuView from '../view/index.js';

class AccountMenu extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = { isAuth: props.isUserAuth};
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        return <AccountMenuView 
            auth = {this.state.isAuth}
            anchorEl = {this.state.anchorEl}
            handleClick = {this.handleClick}
            handleClose = {this.handleClose}
        />
    }
}

export default AccountMenu;