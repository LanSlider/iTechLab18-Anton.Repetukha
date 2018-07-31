import React from 'react';
import MenuView from '../view/index.js';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedItem: props.selectedItem};
    }
  
    handleChange = (event, selectedItem) => {
        this.setState({ selectedItem: selectedItem });
    };

    render() {
        return <MenuView 
            selectedItem={this.state.selectedItem}
            handleChange={this.handleChange}
        />
    }
}

export default Menu;