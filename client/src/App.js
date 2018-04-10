import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewWarranty from './components/new_warranty';
import ListWarranties from './components/list_warranties';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dino Warranty!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>

        <NewWarranty />
        <ListWarranties />
      </div>
    );
  }
}

export default App;
