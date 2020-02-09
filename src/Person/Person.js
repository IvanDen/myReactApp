import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
    width: 60%; margin: 16px auto; border: 1px solid #eee; box-shadow: 0 2px 3px #000; padding: 16px; text-align: center;
    @media (min-width: 550px) {
        width: 450px;
    }
`;

const Person = (props) => {
    /*const style = {
        '@media (min-width: 550px)': {
            width: '450px'
        }
    };*/

    return (
        //<div className="card blue-grey darken-1 ">
        <StyleDiv>
            <div>
                <p onClick={props.click}>i'm {props.name} and i'm {props.age} years old!</p>
                {props.children ? <p>{props.children}</p> : <p>Not hobbies</p>}
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        </StyleDiv>
    );
}
export default Person;
