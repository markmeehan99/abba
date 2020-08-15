import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import HomeImage  from './Image.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeImage/>
        <Header/>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>ABBA</h2>
          </div>
        </div>
    );
  }
}

export default App;
