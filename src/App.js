import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
import Person from "./Person/Person";


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

	let assignedClasses = [];
	let buttonClasses = "active";

	if (personsState.persons.length <= 2)
		assignedClasses.push(classes.customRed);

	if (personsState.persons.length <= 1)
		assignedClasses.push(classes.customBold);

	let btnClass = [classes.myButton];
	personsState.showPersonsList ? btnClass.push(classes.customRed) : btnClass.filter(cl => cl === classes.customRed);//btnClass = [classes.myButton];


	return (

			<div className={`${classes.App} ${classes.container}`}>
				<h1>Hello</h1>
				<p className={assignedClasses.join(' ')}>My app is works!</p>
				<button className={btnClass.join(' ')} alt={personsState.showPersonsList} onClick={togglePersonsHandler}>Toggle Persons</button>

				{personsState.showPersonsList
					? <div>
						{personsState.persons && personsState.persons.map((person, index) => {
							return <Person
								click={() => deletePersonHandler(index)}
								key={person.id}
								name={person.name}
								age={person.age}
								changed={(event) => nameChangedHandler(event, person.id)}/>

						})}

					</div>

					: null
				}
			</div>

	);
}


export default App;

