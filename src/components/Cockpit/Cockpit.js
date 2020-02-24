import React from 'react';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

	let assignedClasses = [];
	let buttonClasses = "active";

	if (props.persons.length <= 2)
		assignedClasses.push(classes.customRed);

	if (props.persons.length <= 1)
		assignedClasses.push(classes.customBold);

	let btnClass = [classes.myButton];
	props.showPersonsList ? btnClass.push(classes.customRed) : btnClass.filter(cl => cl === classes.customRed);//btnClass = [classes.myButton];

	return (
		<div>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>My app is works!</p>
			<button className={btnClass.join(' ')}  onClick={props.clicked}>Toggle Persons</button>
		</div>
	)
}

export default Cockpit;
