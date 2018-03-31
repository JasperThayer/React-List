import React from 'react';
import User from './User/User';

const users = (props) => props.users.map((user, index) => {
        return <User
            key={user._id}
            click={() => props.clicked(index)}
            name={user.name}
            title={user.title}
            changed={(event) => props.changed(event, user._id)} />
    });

export default users;