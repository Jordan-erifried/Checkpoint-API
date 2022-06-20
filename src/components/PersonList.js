import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    state = {
        persons: []
    }

    constructor() {
        super();
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
            const persons = res.data;
            this.setState({persons: persons});
        
        })
    }


    render() {
        console.log(this.state)
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}