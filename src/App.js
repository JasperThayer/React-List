import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {_id: 1, name: 'Jasper', title: 'react developer'},
                {_id: 2, name: 'Marge', title: 'accounting manager'},
                {_id: 3, name: 'Kyle', title: 'janitor'},
                {_id: 4, name: 'Sean', title: 'security'},
                {_id: 5, name: 'Richard', title: 'sales'}
            ]
        };
    }

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

    editUsername = (event, id) => {
        // find out which user is getting edited
        const userIndex = this.state.users.findIndex(theuser => {
            return theuser._id === id;
        });

        // make a "copy" of the state for the selected user so we can make changes without mutating the original state
        const user = {
            ...this.state.users[userIndex]
        };

        // now we can change the name of the selected user
        user.name = event.target.value;

        // here we're making a copy of the entire array of users from state so in the next line we can update the selected
        // user in the array and then use setState to update the state of the users to include data from the updated array of users
        const users = [...this.state.users];
        // update users array with the selected user's newly entered data
        users[userIndex] = user;
        // set the state with the new data so the users property in state is now the users array we updated and built in this method
        this.setState( {users: users});
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
                        title={user.title}
                        changed={(event) => this.editUsername(event, user._id)} />
                    })}
                </div>
            </div>
        );
    }
}

export default App;