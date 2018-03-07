import React from 'react';
import './User.css';

const user = (props) => {
    return <div className="user">Name: {props.name} Title: {props.title} <button>X</button></div>
};

export default user;