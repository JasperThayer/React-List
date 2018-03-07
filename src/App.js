import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {
  state = {
      users: [
          {_id: 1, name: 'Jasper', title: 'react developer'},
          {_id: 2, name: 'Marge', title: 'accounting manager'},
          {_id: 3, name: 'Kyle', title: 'janitor'},
          {_id: 4, name: 'Sean', title: 'security'},
          {_id: 5, name: 'Richard', title: 'sales'}
      ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React List by Jasper Thayer</h1>
        </header>
        <div className="User-list">
            {this.state.users.map(user => {
                return <User
                    key={user._id}
                    name={user.name}
                    title={user.title} />
            })}
        </div>
      </div>
    );
  }
}

export default App;