import React, { Component } from 'react';
import HeaderView from '../../Header/view/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedItem: props.selectedItem};
  }
  render() {
    return <HeaderView selectedItem={this.state.selectedItem} />;
  }
}

export default Header;