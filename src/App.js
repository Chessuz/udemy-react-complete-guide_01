import React, { Component } from 'react';

import classes from './App.css';

import Person from './Person';

class App extends Component {
    state = {
        persons: [
            { id: 'a', name: 'Max', age: 28 },
            { id: 'b', name: 'Manu', age: 29 },
            { id: 'c', name: 'Stephanie', age: 26 },
        ],
        showPersons: false,
    };

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
        let persons = null;

        let btnClasses = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletaPessoaHandler(index)}
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                changed={(event) =>
                                    this.nomeTrocadohandler(event, person.id)
                                }
                            />
                        );
                    })}
                </div>
            );

            btnClasses = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Teste</h1>
                <p className={assignedClasses.join(' ')}>
                    This is really working
                </p>
                <button
                    className={btnClasses}
                    onClick={this.tooglePersonsHandler}
                >
                    Mostrar Pessoas
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
