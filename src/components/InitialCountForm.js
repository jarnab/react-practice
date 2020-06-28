import React, { Component } from 'react'


export default class InitialCountForm extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            count: ''
        };
      }
    
      handleChange = (e) => {
        this.setState({
            count: e.target.value
        });
      }
      
      submitForm = (e) => {
        e.preventDefault();
        this.props.handleData(this.state)
      } 
    render() {
        return (
            <div>
                <form >
                <input
                    type="text"
                    placeholder="enter some text!"
                    value={this.state.count}
                    onChange={this.handleChange}
                />
                <br />
                <button type="button" onClick={this.submitForm}>Set InitialCount</button>
                
                </form>
      </div>
        )
    }
}
