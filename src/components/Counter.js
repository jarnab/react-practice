import React, { Component } from 'react';
import InitialCountForm from './InitialCountForm'
import Button from 'react-bootstrap/Button'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        
    }
    handleParentData = (formModel) => {
        this.setState({...formModel});
      }
    incrementCount() {
       this.setState({count : this.state.count+1}) ;
    }
    decrementCount() {
        this.setState({count : this.state.count-1}) ;
    }
    render() {
        return (
            <div>
                <div>
                <Button variant="primary" onClick={e => this.incrementCount()}>Increment</Button>
                <Button onClick={e => this.decrementCount()}>Decrement</Button> 
                </div>
                <div>Current Count:{this.state.count}</div>
                <br /><br />
                <InitialCountForm handleData={this.handleParentData}/>
                
            </div>
        );
    }
}

export default Counter;