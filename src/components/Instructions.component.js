import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  
      
  render() {
    let fruitImg = null;
    if (this.props.showImage === "true"){
      fruitImg = (
        <div>
        <h4>Conditional Rendering..passed from App.js</h4>
      </div>
      );
    }
    let filteredItems = this.props.items.filter(item => item.length > 3);
    let upperCaseItems = filteredItems.map(item => item.toUpperCase());
    const itemList = upperCaseItems.map(item => {
      return <li>{item}</li>
    });
    const beforeFilterList = this.props.items.map(item => {
      return <li>{item}</li>
    });
    return (
      
      <div className="instructions"> 
        <h3>Follow the instructions on the README to get started! </h3>
        <div>{fruitImg}</div>
        <div>
          Before filter before
          {beforeFilterList}
          <div>After filtering & Uppercase convertion
          {itemList}
          </div>
        </div>
      </div>

    );
  }
}

export default Instructions