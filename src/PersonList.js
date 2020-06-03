import React from 'react'

export default ({people = []}) => 
    <ul>
        {people.map((person, index) => <li key={index}>{person.firstName} {person.lastName}</li>)}
    </ul>