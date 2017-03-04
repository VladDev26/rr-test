import React, {Component} from 'react';
import {connect} from 'react-redux';

import Modal from './Modal';

function EditItem ({
	isEditModalVisible, 
	toggleEditModalVisibility, 
	elementToEdit, 
	performance, 
	saveEditedItem, 
	setElementToEdit,
}){

	if(!isEditModalVisible) return null;
	
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
		isEditModalVisible: store.reducer.isEditModalVisible,
		elementToEdit: store.reducer.elementToEdit,
		performance: store.reducer.performance
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
