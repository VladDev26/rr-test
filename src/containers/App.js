import React, {Component} from 'react';
import { connect } from 'react-redux';

import Performance from './Performance';
import EditItem from '../components/EditItem';
import AddItem from '../components/AddItem';
import Login from '../components/Login';


class App extends Component{

	componentDidMount(){
		setTimeout(() => {
			this.props.checkAuth(!!localStorage.getItem('id_token'));
		}, 500);
	}

	render(){
		return(
			<div className="wrapper">
				<Login auth={this.props.auth} />
				<AddItem />
				<Performance />
				<EditItem />
			</div>
		);
	}
}


import { checkAuth } from '../actions';

function mapDispatchToProps (dispatch) {
	return {
		checkAuth: boolean => { dispatch(checkAuth(boolean)) }
	};
}

export default connect(null, mapDispatchToProps)(App);

