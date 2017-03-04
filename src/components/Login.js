import {connect} from 'react-redux';
import React from 'react';

import {loginRequest, logOut} from '../actions/';

function Login ({ isLogged, loginRequest, logOut }){

	const login = (
		<button className="btn btn-secondary"
			onClick={loginRequest}
		>login</button>
	);
	const logout = (
		<button className="btn btn-info"
			onClick={logOut}
		>logout</button>
	);

	return (
		<div className="container py-4 text-right">
			{isLogged ? logout : login}
		</div>
	);
}

function mapStateToProps(state){
	return {
		isLogged: state.helloReducer.isLogged
	}
}
function mapDispatchToProps(dispatch){
	return {
		loginRequest: () => {dispatch(loginRequest())},
		logOut: () => {dispatch(logOut())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);