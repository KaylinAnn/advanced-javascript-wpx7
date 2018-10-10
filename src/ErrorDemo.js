import React, { Component } from 'react';

export default class ErrorDemo extends Component {
  state = {
    max: null,
    message: null
  }

  calculateMax = arr => {
    if (!arr.length) {
      throw new Error('No values to calculate')
    }
    //....
  }

  doTheActualCalc = (arr) => {

  }

  doThing = () => {
    this.setState({ message: null })
    const arr = [];
    try {
      const max = this.calculateMax(arr);
      this.setState({ max });
    } catch (error) {
      this.setState({ message: "you didnt supply any values" })

    }
  }

  render() {
    const { max, message } = this.state;

    return (
      <div>
        <h1>Error Demo</h1>
        <h2>Max: {max}</h2>
        <div><button onClick={this.doThing}>Do thing</button></div>
        <div>{message}</div>
      </div>
    );
  }
}