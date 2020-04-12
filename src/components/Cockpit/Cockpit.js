import React, {useEffect, useRef, useContext} from 'react';
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";


const Cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);


	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		toggleBtnRef.current.click();
		return () => {
			// clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect');
		}
	}, []);

	let assignedClasses = [];
	let buttonClasses = "active";

	if (props.personsLength <= 2)
		assignedClasses.push(classes.customRed);

	if (props.personsLength <= 1)
		assignedClasses.push(classes.customBold);

	let btnClass = [classes.myButton];
	props.showPersonsList ? btnClass.push(classes.customRed) : btnClass.filter(cl => cl === classes.customRed);//btnClass = [classes.myButton];

	return (
		<div>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>My app is works!</p>
			<button
				className={btnClass.join(' ')}
				onClick={props.clicked}
				ref={toggleBtnRef}
			>
				Toggle Persons
			</button>
			<button className={classes.myButton} onClick={authContext.login}>Log in</button>
		</div>
	)
}

export default React.memo(Cockpit);
