import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function SetDate({date, setDate}){
	const startDate = moment(date) || moment();
	return(
		<DatePicker className="form-control" 
			selected={startDate} 
			onChange={setDate} />
	);
}

export default SetDate;