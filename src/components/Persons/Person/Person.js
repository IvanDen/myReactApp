import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Aux from "../../../hoc/Awux";
import withClass from "../../../hoc/Awux";
import AuthContext from "../../../context/auth-context";




class Person extends Component {

	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated)
    }

    render () {
        return (
            <Aux>
				{this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in!</p>}

                <p onClick={this.props.click}>
                    i'm {this.props.name} and i'm {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
					// ref={(inputEl) => {this.inputElement = inputEl}}
					ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }    
}
// export default withClass(Person, classes.personWrap);

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};
export default Person;
