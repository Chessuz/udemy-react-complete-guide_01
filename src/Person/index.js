import React from 'react';
import classes from './style.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>
                Eu sou {props.name} e tenho {props.age} anos!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
