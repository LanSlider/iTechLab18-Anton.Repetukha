import React, { Component } from 'react/index.js';
import Counter from '../views/Counter/index.js';

class CounterContainer extends Component {  
    constructor(props) {
      super(props);
      this.state = {count: 0};
    }

    incrementCount = (()=> {
      this.setState({count: this.state.count + 1});
    }) 

    decrementCount = (()=> {
      this.setState({count: this.state.count - 1});
    }) 

    resetCount = (()=> {
      this.setState({count: 0});
    }) 

    render() {
      return <Counter 
        countValue = {this.state.count}
        incrementCount = {this.incrementCount}
        resetCount = {this.resetCount}
        decrementCount = {this.decrementCount}
      />;
  }
}

export default CounterContainer;