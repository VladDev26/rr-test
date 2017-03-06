

const initialState = {
	performance: [],
	isLogged: !!localStorage.getItem('id_token'),

	isEditModalVisible: false,
	isAddModalVisible: false,

	elementToEdit: {},
	elementToAdd: {
		name: '...',
		place: '...',
		text: '...',
		date: Date.now()
	}
};

export default function(state = initialState, action) {
	const {type, payload} = action;

	switch (type) {
		case 'SET_PERFORMANCE':
			return {...state, performance: payload};

		case 'ADD_ITEM':
			return {...state, 
				performance: [...state.performance, payload]
			};


		case 'TOGGLE_EDIT_MODAL_VISIBILITY':
			return {...state, isEditModalVisible: payload};
		case 'TOGGLE_ADD_MODAL_VISIBILITY':
			return {...state, isAddModalVisible: payload};


		case 'SET_ELEMENT_TO_EDIT':
			return {...state, elementToEdit: payload};
		case 'SET_ELEMENT_TO_ADD':
			return {...state, elementToAdd: payload};


		case 'SET_IS_LOGGED':
			return {...state, isLogged: payload};
			
		default:
			return state;
	}
}