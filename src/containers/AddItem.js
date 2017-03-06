import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import uuidV4 from 'uuid/v4';
import * as act from '../actions';

import Modal from '../components/Modal';


function AddItem ({state, addItem, setElementToAdd, toggleAddModalVisibility}){
	const { isAddModalVisible, elementToAdd, isLogged } = state;
	
	if(!isLogged) return null;
	
	function close(){
		toggleAddModalVisibility(false);
	}
	function open(){
		toggleAddModalVisibility(true);
	}

	function save(){
		addItem({ ...elementToAdd, id: uuidV4() });
		close();
	}
	

	let button = (
		<div className="container text-right">
			<button className="btn btn-success" onClick={open}>add</button>
		</div>
	);

	return isAddModalVisible ? 
		<Modal 
			setElement={setElementToAdd} 
			element={elementToAdd}
			save={save}
			close={close}/> 
		: button;
}


AddItem.propTypes = {
	addItem: PropTypes.func.isRequired,
	setElementToAdd: PropTypes.func.isRequired,
	toggleAddModalVisibility: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired
}


function mapDispatchToProps (dispatch) {
	return {
		setElementToAdd: obj => {
			dispatch(act.setElementToAdd(obj))},
		toggleAddModalVisibility: boolean => {
			dispatch(act.toggleAddModalVisibility(boolean))},
		addItem: obj => {
			dispatch(act.addItem(obj))}
	};
}

export default connect(null, mapDispatchToProps)(AddItem);
