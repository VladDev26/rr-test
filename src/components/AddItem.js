import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidV4 from 'uuid/v4';

import Modal from './Modal';



function AddItem ({
	isAddModalVisible, 
	toggleAddModalVisibility, 
	addItem, 
	elementToAdd, 
	setElementToAdd,
	isLogged
}){
	
	
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
		<div className="container py-4">
			<button className="btn btn-success" onClick={open}>+</button>
		</div>
	);

	return isAddModalVisible ? 
		<Modal 
			setElement={setElementToAdd} 
			element={elementToAdd}
			save={save}
			close={close}/> 
		: isLogged ? button : null;
}







function mapStateToProps (store) {
	return {
		isAddModalVisible: store.helloReducer.isAddModalVisible,
		elementToAdd: store.helloReducer.elementToAdd,
		isLogged: store.helloReducer.isLogged
	};
}

import { toggleAddModalVisibility, setElementToAdd, addItem } from '../actions';
function mapDispatchToProps (dispatch) {
	return {
		setElementToAdd: obj => {dispatch(setElementToAdd(obj))},
		toggleAddModalVisibility: boolean => {dispatch(toggleAddModalVisibility(boolean))},
		addItem: obj => {dispatch(addItem(obj))}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
