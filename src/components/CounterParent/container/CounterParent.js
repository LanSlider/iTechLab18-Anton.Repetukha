import React, { Component } from 'react/index.js';
import CounterContainer from '../../Counter/container/CounterContainer.js';
import CounterParentView from '../view/index';
import actionType from '../../../constants/Action';

class CounterParent extends Component {  
    constructor(props) {
        super(props); 
        this.state = {childrenCount: 1, childKeys: [0], action: actionType.none};
    }

    addChild = (() => {
        let array = this.state.childKeys;
        array.push(this.state.childrenCount);
        this.setState({
            childKeys: array,
            childrenCount: this.state.childrenCount + 1,
            action: actionType.increment,
        });
    })  

    delLastChild = (() => {
        if(this.state.childKeys.length > 1) {
            let arr = this.state.childKeys;
            arr.splice(arr.length - 1);
            this.setState({
                childKeys: arr, 
                childrenCount: this.state.childrenCount - 1,
                action: actionType.decrement,
            });
        }
    }) 

    resetChildren = (()=> {
        this.setState({childrenCount: 1, childKeys: [0], action: actionType.reset});
    }) 


    static getDerivedStateFromProps(props, state) {
        console.log("---------Parent----------");
        console.log("Parent: getDerivedStateFromProps");
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Parent: getSnapshotBeforeUpdate");
        return true;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Parent: shouldComponentUpdate");
        return true;
    }

    componentDidMount() {
        console.log("Parent: componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Parent: componentDidUpdate");
        console.log("---------Parent----------");
        console.log("");
    }

    componentWillUnmount() {
        console.log("Parent: componentWillUnmount");
    }

    render() {
      return <CounterParentView 
        childrenCount = {this.state.childrenCount}
        arrayCounter = {
            this.state.childKeys.map((key) => { 
                return <CounterContainer key={key} action={this.state.action} /> 
            })
        }
        addChild = {this.addChild}
        resetChildren = {this.resetChildren}
        delLastChild = {this.delLastChild}       
      />;
  }
}

export default CounterParent;