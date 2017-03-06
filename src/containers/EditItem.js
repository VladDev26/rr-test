import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as act from '../actions';

import Modal from '../components/Modal';

function EditItem ({state, toggleEditModalVisibility, saveEditedItem, setElementToEdit}){

	const {isEditModalVisible, elementToEdit, performance} = state;

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


EditItem.propTypes = {
	saveEditedItem: PropTypes.func.isRequired,
	setElementToEdit: PropTypes.func.isRequired,
	toggleEditModalVisibility: PropTypes.func.isRequired,

	state: PropTypes.object.isRequired
}


function mapDispatchToProps (dispatch) {
	return {
		toggleEditModalVisibility: boolean => { dispatch(
				act.toggleEditModalVisibility(boolean)) },

		setElementToEdit: el => { dispatch(
			act.setElementToEdit(el)) },

		saveEditedItem: (arr, obj) => { dispatch(
			act.saveEditedItem(arr, obj)) }
	};
}

export default connect(null, mapDispatchToProps)(EditItem);
