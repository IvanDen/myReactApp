import React from 'react';

const UserOutput = (props) => {
	return (
		<div className="row">
			<div className="card blue-grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">Users name info</span>
					<p>User name: {props.userName}</p>
					<p>It must be overwritten!</p>
				</div>
			</div>

		</div>
	)
}

export default UserOutput;

