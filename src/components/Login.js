import {connect} from 'react-redux';
import React from 'react';


export default function(props) {
	const { isLogged, showAuthModal, logOut } = props.state;

	const pleaseLogin = (
		<div className="alert alert-info d-inline-block">
			Please 
  			<a href="#" className="alert-link px-2" onClick={showAuthModal}>login</a> 
  			to manage the list
		</div>
	);

	return (
		<div className="container py-4 text-right">
			{
				isLogged ?
				<button className='btn btn-info' onClick={logOut}>logout</button> :
				pleaseLogin
			}
		</div>
	);
}
