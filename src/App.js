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

  // I can run some other method here that will get called every time the component is rendered
  // This is also where I'd create event handlers, so for instance an onclick handler can trigger a method I define here

  deleteUser = (userIndex) => {
      // create a "copy" of the state so we can make changes and update the real state using setState
      // This way the state can not be mutated

      // old javascript way commented out
      // const users = this.state.users.slice();

      // ES6 way using ... spread operator
      const users = [...this.state.users];
      users.splice(userIndex, 1);
      this.setState({users: users});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React List by Jasper Thayer</h1>
        </header>
        <div className="User-list">
            {this.state.users.map((user, index) => {
                return <User
                    key={user._id}
                    click={() => this.deleteUser(index)}
                    name={user.name}
                    title={user.title} />
            })}
        </div>
      </div>
    );
  }
}

export default App;