import React, { Component } from 'react'

export default class ClassCounter extends Component {
     constructor(){
        super()
        this.count = 0;
     }


  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count : {this.count}</p>
        <button>Increment</button>
        <button>Decrement</button>
      </>
    )
  }
}
