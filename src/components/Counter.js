import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0
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
                <button onClick={e => this.incrementCount()}>Increment</button>
                <button onClick={e => this.decrementCount()}>Decrement</button> 
                </div>
                <div>{this.state.count}</div>
            </div>
        );
    }
}

export default Counter;