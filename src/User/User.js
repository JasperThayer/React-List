import React from 'react';
import './User.css';

const user = (props) => {
    return <div className="user"><b>Name:</b> {props.name} <b>Title:</b> {props.title} <button>X</button></div>
};

export default user;