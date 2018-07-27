import React, { Component } from 'react/index.js';
import CounterContainer from '../containers/CounterContainer.js';
import CounterParentView from '../views/CounterParent/index.js';

class CounterParent extends Component {  
    constructor(props) {
        super(props);
        this.state = {counterCount: 1, arrayKeys: [0], actionType: "none"};
    }

    addCounter = (()=> {
        let array = this.state.arrayKeys;
        array.push(this.state.countCounter);
        this.setState({
            arrayKeys: array,
            counterCount: this.state.counterCount + 1,
            actionType: "addCounter",
        });
    })  

    delCounter = (()=> {
        if(this.state.arrayKeys.length > 1) {
            let arr = this.state.arrayKeys;
            arr.splice(arr.length - 1);
            this.setState({
                arrayKeys: arr, 
                counterCount: this.state.counterCount - 1,
                actionType: "delCounter",
            });
        }
    }) 

    resetCounter = (()=> {
        this.setState({counterCount: 1, arrayKeys: [0], actionType: "resetCounter"});
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
        countCounter = {this.state.counterCount}
        arrayCounter = {
            this.state.arrayKeys.map((key) => { 
                return <CounterContainer key={key} action={this.state.actionType} /> 
            })
        }
        addCounter = {this.addCounter}
        resetCounter = {this.resetCounter}
        delCounter = {this.delCounter}       
      />;
  }
}

export default CounterParent;