import React from 'react';
import HeaderView from '../view/index.js';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {...state.user}
};

class Header extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {isClickForOpen: false, isAddCategoryMenu: this.props.isAddCategoryMenu};
    }

    handleMenuOpen = () => {
        this.setState({ isClickForOpen: !this.state.isClickForOpen }) 
    }

    render() {
        return (
        <HeaderView 
            isClickForOpen = {this.state.isClickForOpen}
            handleMenuOpen = {this.handleMenuOpen}
            isAuth = {this.props.isAuth}
            userName = {this.props.name}
            isLoading = {this.props.isLoading}
            isAddCategoryMenu = {this.state.isAddCategoryMenu}
        />)
    }
}

export default connect(mapStateToProps)(Header);