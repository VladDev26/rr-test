import React, {Component} from 'react';
import { connect } from 'react-redux';
import path from 'path';

import PerformanceItem from '../components/PerformanceItem';

const myurl = path.resolve(__dirname + 'src/json/performance.json');


class Performance extends Component{
	componentDidMount(){
		this.props.fetchPerformance(myurl);
	}

	render(){
		const {performance, 
			removeItem, 
			isLogged, 
			toggleEditModalVisibility, 
			setElementToEdit} = this.props;


		if(!performance.length) {
			return (
				<div className="container py-4">
					<p>No items...</p>
				</div>
			);
		}

		const item = performance.map(el => {
			let date = new Date(el.date).toLocaleDateString();

			function handleEdit(){
				toggleEditModalVisibility(true);
				setElementToEdit(el, el.id);
			}
			function handleRemove(){
				removeItem(performance, el.id);
			}

			return(
				<PerformanceItem 
					key={el.id}
					el={el} 
					date={date} 
					edit={handleEdit} 
					isLogged={isLogged} 
					remove={handleRemove} />
			);
		});

		return(
			<div className="container py-4">
				{item}
			</div>
		);
	}
}


function mapStateToProps (state) {
	console.log(state);
	return {
		performance: state.reducer.performance,
		isLogged: state.reducer.isLogged,
	};
}

import * as action from '../actions';

function mapDispatchToProps (dispatch) {
	return {
		fetchPerformance: url => { dispatch(action.fetchPerformance(url)) },
		removeItem: (a,b) => { dispatch(action.removeItem(a,b)) },
		toggleEditModalVisibility: boolean => { 
			dispatch(action.toggleEditModalVisibility(boolean)) },
		setElementToEdit: el => { dispatch(action.setElementToEdit(el)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Performance);