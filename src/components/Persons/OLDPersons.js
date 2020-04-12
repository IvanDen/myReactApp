import React, {PureComponent} from 'react';
import Person from "./Person/Person";



class OLDPersons extends PureComponent {

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate...');
		return {message: 'Snapshot!'};
	}
	componentDidUpdate(prevProps, prevState, Snapshot) {
		console.log('[Persons.js] componentDidUpdate...');
		console.log(Snapshot);
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount...');
	}

	render() {
		console.log('[Persons.js] render...');
		return this.props.persons.map((person, index) => {
			return(
				<Person
					click={() => this.props.clicked(index)}
					key={person.id}
					name={person.name}
					age={person.age}
					changed={(event) => this.props.changed(event, person.id)} />
				);
		});
	}
}



export default OLDPersons;
