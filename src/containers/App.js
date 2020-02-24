import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


const App = props => {

	const [personsState, setPersonsState] = useState({
		persons: [
			{id: 'usr1', name: "Vania", age: 25},
			{id: 'usr2', name: "Lex", age: 21},
			{id: 'usr3', name: "Dima", age: 30}
		],
		stringState: "This is other state",
		showPersonsList: true
	});
	
	const deletePersonHandler = (personIndex) =>  {
		const persons =[...personsState.persons];
		persons.splice(personIndex, 1);
		setPersonsState({
			persons: persons,
			stringState: personsState.stringState,
			showPersonsList: personsState.showPersonsList
		});
	}

	const nameChangedHandler = (event, id) => {
		const personIndex = personsState.persons.findIndex(p=> {
			return p.id === id;
		});
		const person = {
			...personsState.persons[personIndex]
		};
		//const person = Object.assign({}, personsState.persons[personIndex]);
		person.name = event.target.value;

		const persons = [...personsState.persons];
		persons[personIndex] = person;

		setPersonsState({
			persons: persons,
			stringState: personsState.stringState,
			showPersonsList: personsState.showPersonsList
		});
	}

	const togglePersonsHandler = () => {
		let isShow = personsState.showPersonsList;

		setPersonsState({
			persons: [...personsState.persons],
			stringState: personsState.stringState,
			showPersonsList: !isShow
		});
	}




	return (

			<div className={`${classes.App} ${classes.container}`}>
				<Cockpit
					title={props.appTitle}
					showPersonsList={personsState.showPersonsList}
					persons={personsState.persons}
					clicked={togglePersonsHandler}
				/>
				{personsState.showPersonsList
					? <div>
						<Persons
							persons={personsState.persons}
							clicked={deletePersonHandler}
							changed={nameChangedHandler}/>
					</div>

					: null
				}
			</div>

	);
}


export default App;

