import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'a', name: 'Max', age: 28 },
            { id: 'b', name: 'Manu', age: 29 },
            { id: 'c', name: 'Stephanie', age: 26 },
        ],
        showPersons: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nomeTrocadohandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex],
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons });
    };

    deletaPessoaHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletaPessoaHandler}
                    changed={this.nomeTrocadohandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appName}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.tooglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
