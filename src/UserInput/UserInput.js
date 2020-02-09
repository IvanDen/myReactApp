import React from 'react';

const UserInput = (props) => {
	return (
		<div className="input-field col s6">
			<input type="text"
			       className="validate"
			       onChange={props.changed}
			       value={props.currentName} />
		</div>
		);


}

export default UserInput;
