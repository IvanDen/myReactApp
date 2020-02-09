import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="card blue-grey darken-1 ">
            <div className="card-content white-text">
                <p onClick={props.click}>i'm {props.name} and i'm {props.age} years old!</p>
                {props.children ? <p>{props.children}</p> : <p>Not hobbies</p>}
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        </div>

    );
}
export default Person;
