import React from 'react';

import SetDate from './SetDate';

function Modal ({setElement, element, save, close}){

	let {name, place, date, text} = element;

	function handleChange(e){
		let val = e.target.value || '...';
		let key = e.target.name;
		setElement({...element, [key]: val});
	}
	function setDate(date){
		let parsed = Date.parse(date._d);
		setElement({...element, date: parsed});
	}

	function Input(defaultValue, name){
		return <input type="text"
					defaultValue={defaultValue}
					onChange={handleChange}
					name={name}
					className="form-control"/>;
	}

	const nameInput = Input(name, 'name');
	const placeInput = Input(place, 'place');

	return (
		<div className="mymodal">
			<div className="mymodal__overlay">
			<div className="container-fluid py-4 col-sm-6">
				{nameInput}
				{placeInput}

				<textarea className="form-control"
					defaultValue={text}
					name='text' 
					onChange={handleChange}></textarea>

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