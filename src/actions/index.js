import Promise from 'promise-polyfill'; 
if (!window.Promise) {window.Promise = Promise;}
import 'whatwg-fetch';
import uuidV4 from 'uuid/v4';
import Auth0Lock from 'auth0-lock';


export function setIsLogged(boolean) {
  return {
  	type: 'SET_IS_LOGGED',
  	payload: boolean
  }
}

const lock = new Auth0Lock('W4CE6HLNHm5ZSGcVGrN9Tfxi3uppWpHO', 'vladdev.eu.auth0.com');

lock.on('authenticated', authenticate);

function authenticate({idToken}){
	localStorage.setItem('id_token', idToken);
}


export function showAuthModal() {
	lock.show();
	return {type: 'SHOW_AUTH_MODAL'};
}

export function logOut() {
	localStorage.removeItem('id_token');
	return dispatch => dispatch(
		setIsLogged(false));
}



function makeUniqueID(arr){
	return arr.map(item => {
		item.id = uuidV4();
		return item;
	});
}
function setPerformance(arr){
	return {
		type: 'SET_PERFORMANCE',
		payload: arr
	}
}


export function saveEditedItem(performance, item){
	return dispatch => {
		dispatch(removeItem(performance, item.id));
		dispatch(addItem(item));
	}
	
}

export function fetchPerformance(url){
	return dispatch => fetch(url)
		.then(response => response.json())
		.then(data => dispatch(
				setPerformance(makeUniqueID(data))
			)
		)
		.catch(() => dispatch(setPerformance([])));
}

export function toggleEditModalVisibility(boolean){
	return {
		type: 'TOGGLE_EDIT_MODAL_VISIBILITY',
		payload: boolean
	}
}
export function toggleAddModalVisibility(boolean){
	return {
		type: 'TOGGLE_ADD_MODAL_VISIBILITY',
		payload: boolean
	}
}

export function setElementToEdit(obj){
	return {
		type: 'SET_ELEMENT_TO_EDIT',
		payload: obj
	}
}
export function setElementToAdd(obj){
	return {
		type: 'SET_ELEMENT_TO_ADD',
		payload: obj
	}
}

export function addItem(obj){
	return {
		type: 'ADD_ITEM',
		payload: obj
	}
}



export function removeItem(performance, id){
	const filtered = performance.filter(
		el => id != el.id);

	return dispatch => dispatch(
		setPerformance(filtered));
}

