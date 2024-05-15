import React, { Component, useState } from 'react'

export default class ClassCounter extends Component {
    constructor(){
      super()
      this.state = {
        count : 0
      };
    }
    handleCount(val){
      this.setState(prev => {
        return {count : prev.count + val}
      })
      console.log(this.state)
    }

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button type='button' onClick={e => this.handleCount(1)}>Increment</button>
        <button type='button' onClick={e => this.handleCount(-1)}>Decrement</button>
      </>
    )
  }
}
