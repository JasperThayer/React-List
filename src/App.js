import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React List by Jasper Thayer</h1>
        </header>
        <div className="App-list">
          <p>Create a class located at <code>src/App.js</code> that will display list of people</p>
          <p>Add methods to the class that allow you to click a button to delete a user and enter text to change the user's data.</p>
        </div>
      </div>
    );
  }
}

export default App;