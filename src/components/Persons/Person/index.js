import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './style.css';

import Auxx from '../../../hoc/Auxx';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);

        this.inputElemRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElemRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendireing...');
        return (
            <Auxx>
                {this.context.authenticated ? (
                    <p>Authenticated</p>
                ) : (
                    <p>Please Login</p>
                )}

                <p onClick={this.props.click}>
                    Eu sou {this.props.name} e tenho {this.props.age} anos!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    // ref={(inputEl) => {
                    //     this.inputElem = inputEl;
                    // }}
                    ref={this.inputElemRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxx>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    teste: PropTypes.string,
};

export default withClass(Person, classes.Person);
// export default Person;
