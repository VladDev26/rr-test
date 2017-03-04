import React, {Component} from 'react';
import { connect } from 'react-redux';

import Performance from '../components/Performance';
import Edit from '../components/Edit';
import AddItem from '../components/AddItem';
import Login from '../components/Login';


function App ({auth}){
	return(
		<div className="wrapper">
			<Login auth={auth} />
			<Performance />
			<Edit />
			<AddItem />
		</div>
	);
}

export default App;
