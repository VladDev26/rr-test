import React from 'react';

export default function PerformanceControls({edit, remove}){
	return(
		<div className="row">
			<div className="col text-left">
				<button className="btn btn-primary" 
					onClick={edit}>edit</button>
			</div>
			<div className="col text-right">
				<button className="btn btn-danger" 
					onClick={remove}>del</button>
			</div>
		</div>
	);
}