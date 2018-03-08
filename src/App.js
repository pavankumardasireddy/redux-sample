import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './containers/Count'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sample on Redux</h1>
        </header>
        <Count />
      </div>
    );
  }
}

export default App;
