import React, { useEffect, useRef } from 'react';

import classes from './style.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toogleButtonRef = useRef(null);

    useEffect(() => {
        toogleButtonRef.current.click();
    }, []);

    const assignedClasses = [];

    let btnClasses = '';
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                ref={toogleButtonRef}
                className={btnClasses}
                onClick={props.clicked}
            >
                Mostrar Pessoas
            </button>

            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);
