import {connect} from 'react-redux';
import React from 'react';

import {loginRequest, logOut} from '../actions/';

function Login ({ isLogged, loginRequest, logOut }){

	function Button(style, click, text){
		return <button className={style} onClick={click}>{text}</button>
	}

	const login = Button('btn btn-secondary', loginRequest, 'login');
	const logout = Button('btn btn-info', logOut, 'logout');


	return (
		<div className="container py-4 text-right">
			{isLogged ? logout : login}
		</div>
	);
}

function mapStateToProps(state){
	return {
		isLogged: state.reducer.isLogged
	}
}
function mapDispatchToProps(dispatch){
	return {
		loginRequest: () => {dispatch(loginRequest())},
		logOut: () => {dispatch(logOut())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);