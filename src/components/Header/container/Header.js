import React, { Component } from 'react';
import HeaderView from '../../Header/view/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }
  render() {
    return <HeaderView value={this.state.value} />;
  }
}

export default Header;