import React from 'react';

import Person from './Person';

const persons = (props) => {
    console.log('[Persons.js] rendireing...');
    return props.persons.map((person, index) => (
        <Person
            click={() => props.clicked(index)}
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => props.changed(event, person.id)}
        />
    ));
};

export default persons;
