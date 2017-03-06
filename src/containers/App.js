import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Performance from './Performance';
import EditItem from './EditItem';
import AddItem from './AddItem';
import Login from '../components/Login';



class App extends Component{

	componentDidMount(){
		setTimeout(() => {
			this.props.setIsLogged(!!localStorage.getItem('id_token'));
		}, 500);
	}

	render(){
		const state = this.props;
		
		return(
			<div className="wrapper">
				<Login state={state} />
				<AddItem state={state} />
				<Performance />
				<EditItem state={state} />
			</div>
		);
	}
}


App.propTypes = {
	setIsLogged: PropTypes.func.isRequired,
	showAuthModal: PropTypes.func.isRequired,
	logOut: PropTypes.func.isRequired,

	performance: PropTypes.arrayOf(
		PropTypes.object).isRequired,
	isLogged: PropTypes.bool.isRequired,

	isEditModalVisible: PropTypes.bool.isRequired,
	isAddModalVisible: PropTypes.bool.isRequired,

	elementToEdit: PropTypes.object.isRequired,
	elementToAdd: PropTypes.object.isRequired
}


function mapStateToProps({reducer}){
	return {...reducer};
}

import * as act from '../actions';

function mapDispatchToProps (dispatch) {
	return {
		setIsLogged: boolean => { dispatch( act.setIsLogged(boolean) ) },
		showAuthModal: () => { dispatch( act.showAuthModal() ) },
		logOut: () => { dispatch( act.logOut() ) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

