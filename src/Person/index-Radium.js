import React from 'react';
import './style.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)': {
            width: '450px',
        },
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>
                Eu sou {props.name} e tenho {props.age} anos!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);
