import React from 'react';

import SetDate from './SetDate';

function Modal ({setElement, element, save, close}){


	function handleChange({ target: {value, name} }){
		const isEmpty = !value.trim();
		const val = isEmpty ? '...' : value;
		
		setElement({...element, [name]: val});
	}
	
	function setDate(date){
		const parsed = Date.parse(date._d);
		setElement({...element, date: parsed});
	}

	const {name, place, date, text} = element;

	return (
		<div className="mymodal">
			<div className="mymodal__overlay">
			<div className="container-fluid py-4 col-sm-6">
				<input type="text"
					defaultValue={name}
					onChange={handleChange}
					name={'name'}
					className="form-control"/>
				<input type="text"
					defaultValue={place}
					onChange={handleChange}
					name={'place'}
					className="form-control"/>

				<textarea className="form-control"
					defaultValue={text}
					name='text' 
					onChange={handleChange}
				></textarea>

				<SetDate date={date} setDate={setDate} />
				<div>
					<button className="btn btn-danger" onClick={close}>cancel</button>
					<button className="btn btn-success" onClick={save}>save</button>
				</div>
			</div>
			</div>
		</div>
	);
}

export default Modal;