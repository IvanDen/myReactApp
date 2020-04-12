import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
// import Persons from "../components/Persons/Persons";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Awux";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";



const App = props => {

	const [personsState, setPersonsState] = useState({
		persons: [
			{id: 'usr1', name: "Vania", age: 25},
			{id: 'usr2', name: "Lex", age: 21},
			{id: 'usr3', name: "Dima", age: 30}
		],
		stringState: "This is other state",
		showPersonsList: true,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false

	});
	
	const deletePersonHandler = (personIndex) =>  {
		const persons =[...personsState.persons];
		persons.splice(personIndex, 1);
		setPersonsState({
			persons: persons,
			stringState: personsState.stringState,
			showPersonsList: personsState.showPersonsList,
			showCockpit: personsState.showCockpit
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

		setPersonsState((prevState, props) => {
			return	{
					...prevState,
					persons: [...persons],
					changeCounter: prevState.changeCounter + 1,
				};
		});
	}

	const togglePersonsHandler = () => {
		let isShow = personsState.showPersonsList;

		setPersonsState({
			...personsState,
			showPersonsList: !isShow
		});
	}

	const loginHandler = () => {
		setPersonsState({
			...personsState,
			authenticated: true
		})
	}
	return (
			<Aux classes={`${classes.App} ${classes.container}`}>
				<button onClick={() => {
					setPersonsState({
					...personsState,
					showCockpit: !personsState.showCockpit
					})}
				}
				>Remove Cockpit</button>
				<AuthContext.Provider value={{
					authenticated: personsState.authenticated,
					login: loginHandler

				}}>
					{personsState.showCockpit
						? <Cockpit
							title={props.appTitle}
							showPersonsList={personsState.showPersonsList}
							personsLength={personsState.persons.length}
							clicked={togglePersonsHandler}
						/>
						: null}
					{personsState.showPersonsList
						? <div>
							<Persons
								persons={personsState.persons}
								clicked={deletePersonHandler}
								changed={nameChangedHandler}
							/>
						</div>

						: null
					}
				</AuthContext.Provider>
			</Aux>
	);
}


export default withClass(App, classes.App, classes.container);

