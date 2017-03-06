import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import path from 'path';

import PerformanceItem from '../components/PerformanceItem';
import NoItems from '../components/NoItems';


const myurl = path.resolve(__dirname + 'src/json/performance.json');


class Performance extends Component{
	componentDidMount(){
		this.props.fetchPerformance(myurl);
	}

	render(){
		const {
			performance, removeItem, isLogged, 
			toggleEditModalVisibility, setElementToEdit
		} = this.props;


		if(!performance.length) return <NoItems />;


		const item = performance.map(el => {
			const id = el.id;
			
			function handleEdit(){
				toggleEditModalVisibility(true);
				setElementToEdit(el, id);
			}
			function handleRemove(){
				removeItem(performance, id);
			}

			return(
				<PerformanceItem key={id}
					el={el} 
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


Performance.propTypes = {
	fetchPerformance: PropTypes.func.isRequired,
	removeItem: PropTypes.func.isRequired,
	toggleEditModalVisibility: PropTypes.func.isRequired,
	setElementToEdit: PropTypes.func.isRequired,

	performance: PropTypes.arrayOf(PropTypes.object).isRequired,
	isLogged: PropTypes.bool.isRequired
}


function mapStateToProps ({reducer}) {
	return {
		performance: reducer.performance,
		isLogged: reducer.isLogged,
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