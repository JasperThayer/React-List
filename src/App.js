import React, { Component } from 'react';
import './App.css';
import User from './User/user';

class App extends Component {
  state = {
      users: [
          {name: 'Jasper', title: 'react developer'},
          {name: 'Marge', title: 'accounting manager'},
          {name: 'Kyle', title: 'janitor'},
          {name: 'Sean', title: 'security'},
          {name: 'Richard', title: 'sales'}
      ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React List by Jasper Thayer</h1>
        </header>
        <div className="App-list">
          <User name={this.state.users[0].name} title={this.state.users[0].title} />
        </div>
      </div>
    );
  }
}

export default App;