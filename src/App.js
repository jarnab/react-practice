import React, { Component } from 'react'
import { Instructions } from './components'
import Counter from './components/Counter'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {

    const items = ["Phone","Me","Tablet","It","Watch"];

    return (
      <div className="app">
        <div className="alert alert-info text-center mt-2">
          <h1>Welcome to Praveen's React JS Assignment</h1>
        </div>

        <hr />
        <div className="alert alert-warning">
          React Hands on lab assignmnet for practicing react js step by step
        </div>

        <Instructions showImage="true" items={items}/>
        <div>
          <Counter />
        </div>
      </div>
    )
  }
}

export default App
