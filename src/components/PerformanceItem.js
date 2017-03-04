import React from 'react';

import PerformanceControls from './PerformanceControls';

export default function PerformanceItem({edit, remove, el, date, isLogged}){
	
	let controls = <PerformanceControls remove={remove} edit={edit} />;

	return(
		<div className="card-inverse text-center d-inline-block py-4 align-top col-lg-4 col-md-6">
		  <div className="card-header">
		    <h2>{el.name}</h2>
		  </div>
		  <div className="card-block">
		    <h4 className="card-title">{el.place}</h4>
		    <p className="card-text text-justify">{el.text}</p>

		    {isLogged ? controls : null}
		  </div>
		  <div className="card-footer text-muted">
		    {date}
		  </div>
		</div>
	);
}

