import React from 'react';
import './Header.css';

const header = (props) => {
    const inlinestyle = {
        backgroundColor: '#FF0000',
        fontSize: '20px'
    };

    if (props.users.length > 1) {
        inlinestyle.backgroundColor = '#00FF00'
    }

    return (
        <header style={inlinestyle} className="Header">
            <h1 className="Header-title">React List by Jasper Thayer</h1>
        </header>
    );
};

export default header;