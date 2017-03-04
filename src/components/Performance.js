import React, {Component} from 'react';
import { connect } from 'react-redux';


const myurl = './assets/performance.json';

class Performance extends Component{
	componentDidMount(){
		this.props.fetchPerformance(myurl);

		setTimeout(() => {
			this.props.checkAuth(!!localStorage.getItem('id_token'));
		}, 300);
	}

	render(){
		let {performance, removeItem, isLogged, toggleEditModalVisibility, setElementToEdit} = this.props;
		if(!performance.length) return null;

		let item = performance.map(el => {
			let date = new Date(el.date).toLocaleDateString();

			function handleEditClick(){
				toggleEditModalVisibility(true);
				setElementToEdit(el, el.id);
			}
			function handleRemoveClick(){
				removeItem(performance, el.id);
			}

			let controls = (
				<div className="col">
					<div className="btn-group">
						<button className="btn btn-primary" 
							onClick={handleEditClick}>edit</button>
						<button className="btn btn-danger" 
							onClick={handleRemoveClick}>x</button>
					</div>
				</div>
			);

			return(
				<div key={el.id} className="py-4">
					<div className="row">
						<div className="col">
							<h1>{el.name}</h1>
						</div>
							
						<div className="col">
							<p>{el.place}</p>
							<p>{date}</p>
						</div>
					
						{isLogged ? controls : null}
					</div>
				</div>
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
		performance: state.helloReducer.performance,
		isLogged: state.helloReducer.isLogged,
	};
}

import { fetchPerformance, removeItem, toggleEditModalVisibility, setElementToEdit, checkAuth } from '../actions';

function mapDispatchToProps (dispatch) {
	return {
		fetchPerformance: url => { dispatch(fetchPerformance(url)) },
		removeItem: (a,b) => { dispatch(removeItem(a,b)) },
		toggleEditModalVisibility: boolean => { dispatch(toggleEditModalVisibility(boolean)) },
		setElementToEdit: el => { dispatch(setElementToEdit(el)) },
		checkAuth: boolean => { dispatch(checkAuth(boolean)) }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Performance);