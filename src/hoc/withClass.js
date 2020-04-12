import React from 'react';

const withClass = (WrappedComponent, ...className) => {
	let classString;
	// if (typeof className === "string") {
	// 	classString = className;
	// }
	// else {
	// 	classString = className.join(" ");
	// }

	classString = className.join(" ");
	return props => (
		<div className={classString}>
			<WrappedComponent {...props} />
		</div>
	);
}


export default withClass;
