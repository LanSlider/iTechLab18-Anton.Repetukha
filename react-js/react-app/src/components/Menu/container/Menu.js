import React from 'react';
import MenuView from '../view/index.js';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }
  
    handleChange = (event, value) => {
        this.setState({ value: value });
    };

    render() {
        return <MenuView 
            value={this.state.value}
            handleChange={this.handleChange}
        />
    }
}

export default Menu;