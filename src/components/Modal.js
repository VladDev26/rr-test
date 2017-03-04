import React from 'react';

import EditDate from './EditDate';

function Modal ({setElement, element, save, close}){

	let {name, place, date} = element;

	function handleChange(e){
		let val = e.target.value;
		let key = e.target.name;
		setElement({...element, [key]: val});
	}
	function setDate(date){
		let parsed = Date.parse(date._d);
		setElement({...element, date: parsed});
	}

	return (
		<div className="mymodal">
			<div className="mymodal__overlay">
			<div className="container-fluid py-4 col-sm-6">
				<input 
					className="form-control" 
					type="text"
					required 
					defaultValue={name} 
					name="name" 
					onChange={handleChange} />
				<input 
					className="form-control" 
					type="text"
					required 
					defaultValue={place} 
					name="place" 
					onChange={handleChange} />

				<EditDate date={date} setDate={setDate} />
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