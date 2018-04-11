import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewWarranty from './components/new_warranty';
import ListWarranties from './components/list_warranties';
import new_warranty from './components/new_warranty';
import {
  Route,
  Switch
} from 'react-router-dom';


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
          <h1 className="App-title">Welcome to Dino Warranty!</h1>
        </header>

        <Switch>
          <Route path="/new_warranty" component={new_warranty} />          
          <Route path="/" component={ListWarranties} />
        </Switch>
      </div>
    );
  }
}

export default App;
