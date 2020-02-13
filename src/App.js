import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import './App.css';
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

	const style = {
		backgroundColor: "green",
		color: 'white',
		font: "inherit",
		border: "1px solid blue",
		padding: "8px",
		cursor: "pointer",
		":hover": {
			backgroundColor: "lightgreen",
			color: "black"
		}
	};

	let classes = [];
	let buttonClasses = "active";

	if (personsState.persons.length <= 2)
		classes.push('customRed');

	if (personsState.persons.length <= 1)
		classes.push('customBold');

	// personsState.showPersonsList ? buttonClasses = "active"  : buttonClasses = "";

	// if(personsState.showPersonsList) {
	// 	style.backgroundColor = "red";
	// 	style[":hover"] = {
	// 		backgroundColor: "salmon",
	// 			color: "black"
	// 	}
	// }

// className="btn waves-effect waves-light"
//
	return (

			<div className="App container">
				<h1>Hello</h1>
				<p className={classes.join(' ')}>My app is works!</p>
				<button className="myButton" alt={personsState.showPersonsList} onClick={togglePersonsHandler}>Toggle Persons</button>

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

