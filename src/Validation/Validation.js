import React from 'react';

const Validation = (props) => {
	let validationMessage = 'The string is long enough!';
	if(props.inputLength <= 5) {
		validationMessage = 'The string is too short!';
	}
	return (
		<div>
			<p>{validationMessage}</p>
		</div>
	);
};

export default Validation;
