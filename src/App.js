import React, { Component } from 'react';
import './App.css';
// import ErrorDemo from './ErrorDemo';
import AsyncDemo from "./AsyncDemo"
import CompoundComponents from "./CompondComponentsDemo"
class App extends Component {
  render() {
    return (
      <>
        {/* <ErrorDemo /> */}
        {/* <AsyncDemo /> */}
        <CompoundComponents />
      </>
    );
  }
}

export default App;
