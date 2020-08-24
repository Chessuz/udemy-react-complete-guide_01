import React, { Component } from 'react';
import classes from './style.css';

class Person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('[Person.js] rendireing...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    Eu sou {this.props.name} e tenho {this.props.age} anos!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    }
}

export default Person;
