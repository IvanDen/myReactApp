import React from 'react';
import classes from './Person.module.css';



const Person = (props) => {
    return (
            <div className={classes.personWrap}>
                <p onClick={props.click}>i'm {props.name} and i'm {props.age} years old!</p>
                {props.children ? <p>{props.children}</p> : <p>Not hobbies</p>}
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
    );
}
export default Person;
