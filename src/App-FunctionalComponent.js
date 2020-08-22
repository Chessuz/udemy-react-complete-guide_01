import React, { useState } from 'react';
import './App.css';
import Person from './Person';

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 },
        ],
    });

    const trocarNomeHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Christyan', age: 28 },
                { name: 'Cao', age: 29 },
                { name: 'Stephanie', age: 26 },
            ],
        });
    };

    return (
        <div className="App">
            <button onClick={trocarNomeHandler}>Trocar Nome</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );

    //     state = {
    //         persons: [
    //             { name: 'Max', age: 28 },
    //             { name: 'Manu', age: 29 },
    //             { name: 'Stephanie', age: 26 },
    //         ],
    //     };

    //     trocarNomeHandler = () => {
    //         this.setState({
    //             persons: [
    //                 { name: 'Christyan', age: 28 },
    //                 { name: 'Cao', age: 29 },
    //                 { name: 'Stephanie', age: 26 },
    //             ],
    //         });
    //     };

    //     render() {
    // }
};

export default app;
