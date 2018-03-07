import React, { Component } from 'react';
import './App.css';
import User from './User/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React List by Jasper Thayer</h1>
        </header>
        <div className="App-list">
          <User />
        </div>
      </div>
    );
  }
}

export default App;