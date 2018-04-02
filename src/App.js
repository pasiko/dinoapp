import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewWarranty from './components/new_warranty';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dino Warranty</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <NewWarranty />
      </div>
    );
  }
}

export default App;
