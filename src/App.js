import React, {useState, useCallback} from 'react';
import './App.css';
import './materialize.min.css';
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

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
		<div className="App container">
			<h1>Hello</h1>
			<p>My app is works!</p>
			<button
				className="btn waves-effect waves-light"
				onClick={togglePersonsHandler}>Toggle Persons</button>
			{personsState.showPersonsList ?
				<div className="person">
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


/*
 const [usersState, setUsersState] = useState({
	    userName: "Maxim"

    });

    const userNameChangedHandler = (event) => {
	    setUsersState({
		    userName: event.target.value
	    });
    }
    const style = {
        backgroundColor: 'aqua',
        font: 'inherit',
        border: '1px solid #094032',
        padding: '8px',
        cursor: 'pointer'
    };
    return (
        <div className="App container">
	        <h1>Hello</h1>
	        <UserInput
		        changed={userNameChangedHandler}
		        currentName={usersState.userName}
	        />
	        <UserOutput userName={usersState.userName} />
	        <UserOutput userName={usersState.userName} />
	        <UserOutput userName={usersState.userName} />
        </div>
        <Person name={personsState.persons[0].name}
		age={personsState.persons[0].age}>My Hobbies: learn JS</Person>

		<Person name={personsState.persons[1].name}
		age={personsState.persons[1].age}
		changed={(event) => nameChangedHandler(event)}
		clickFunc={showNameSwitcher}
        defVal={myVal}/>

		<Person name={personsState.persons[2].name}
		age={personsState.persons[2].age}/>
    );
*/
