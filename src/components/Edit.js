import React, {Component} from 'react';
import {connect} from 'react-redux';

import Modal from './Modal';

function Edit ({
	isEditModalVisible, 
	toggleEditModalVisibility, 
	elementToEdit, 
	performance, 
	saveEditedItem, 
	setElementToEdit,
}){

	if(!isEditModalVisible || !elementToEdit) return null;
	
	function close(){
		toggleEditModalVisibility(false);
	}

	function save(){
		saveEditedItem(performance, elementToEdit);
		close();
	}
	
	return(
		<Modal 
			setElement={setElementToEdit} 
			element={elementToEdit}
			save={save}
			close={close}
		/>
	);
}


function mapStateToProps (store) {
	return {
		isEditModalVisible: store.helloReducer.isEditModalVisible,
		elementToEdit: store.helloReducer.elementToEdit,
		performance: store.helloReducer.performance
	};
}

import { toggleEditModalVisibility, setElementToEdit, saveEditedItem } from '../actions';

function mapDispatchToProps (dispatch) {
	return {
		toggleEditModalVisibility: boolean => { 
			dispatch(toggleEditModalVisibility(boolean)) },
		setElementToEdit: el => { dispatch(setElementToEdit(el)) },
		saveEditedItem: (arr, obj) => { dispatch(saveEditedItem(arr, obj)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
