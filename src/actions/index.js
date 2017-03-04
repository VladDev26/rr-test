import Promise from 'promise-polyfill'; 
if (!window.Promise) {window.Promise = Promise;}
import 'whatwg-fetch';
import uuidV4 from 'uuid/v4';



import AuthService from '../utils/AuthService';

const authService = new AuthService(
	'W4CE6HLNHm5ZSGcVGrN9Tfxi3uppWpHO', 
	'vladdev.eu.auth0.com'
);

export function checkAuth(boolean) {
  return {
  	type: 'TOGGLE_LOGGED',
  	payload: boolean
  }
}


export function logOut() {
  authService.logout();
  return {
    type: 'TOGGLE_LOGGED',
	payload: false
  }
}

export function loginRequest() {
  authService.login()
  return {
    type: 'LOGIN_REQUEST'
  }
}









function makeUniqueID(arr){
	return arr.map(item => {
		item.id = uuidV4();
		return item;
	});
}












function fetchSmth(url){
	return fetch(url).then(response => response.json())
}



function setPerformance(data){
	return {
		type: 'SET_PERFORMANCE',
		payload: data
	}
}



export function fetchPerformance(url){
	return dispatch => fetchSmth(url)
		.then(data => dispatch(
			setPerformance(makeUniqueID(data))
		)
	);
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

export function saveEditedItem(performance, item){
	return dispatch => {
		dispatch(removeItem(performance, item.id));
		dispatch(addItem(item));
	}
	
}


export function removeItem(performance, id){
	const filtered = performance.filter(
		el => id != el.id);

	return dispatch => dispatch(
		setPerformance(filtered));
}


export function toggleLogged(boolean){
	return {
		type: 'TOGGLE_LOGGED',
		payload: boolean
	}
}




// export function loginSuccess(error) {
// 	console.log(error);
// 	return {
// 		type: 'TOGGLE_LOGGED',
// 		payload: true
// 	}
// }
// export function loginError(error) {
// 	console.log(error);
// 	return {
// 		type: 'TOGGLE_LOGGED',
// 		payload: false
// 	}
// }

// export function checkLogin() {
//   return dispatch => {
//     authService.lock.on('authenticated', authResult => {
//     	loginSuccess();
//     })
//   }
// }
