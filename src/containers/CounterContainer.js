import React, { Component } from 'react/index.js';
import Counter from '../views/Counter/index.js';
import actionType from '../constants/action';

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

    UNSAFE_componentWillReceiveProps(props) {
      console.log("Child: UNSAFE_componentWillReceiveProps()");
      let count = this.state.count;
      if(props.action === actionType.increment && count % 2 == 0) {
          this.incrementCount();     
      }

      if(props.action === actionType.decrement && count % 2 != 0) {
          this.decrementCount();
      }
      if(props.action === actionType.reset) {
          this.resetCount();
      }
      return props;
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("-------Child--------");
      console.log("Child: shouldComponentUpdate");
      return this.state.count !== nextState.count ? true : false;
    }

    componentDidMount() {
      console.log("Child: componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("Child: componentDidUpdate");
      console.log("-------Child--------");
    }

    componentWillUnmount() {
      console.log("Child: componentWillUnmount");
    }

    render() {
      console.log("Child: render")
      return <Counter 
        countValue = {this.state.count}
        incrementCount = {this.incrementCount}
        resetCount = {this.resetCount}
        decrementCount = {this.decrementCount}
      />;
  }
}

export default CounterContainer;