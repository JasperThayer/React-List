import React from 'react';
import './User.css';

const user = (props) => {
    return (
        <div className="user">
            <b>Name:</b> {props.name}<br/>
            <b>Title:</b> {props.title}<br/>
            <button><b>X</b></button>
        </div>
    );
};

export default user;