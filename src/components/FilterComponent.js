import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./FilterCompomemt.css"


const FilterComponent = ({ filterTodos, filter})=> {
	filterTodos(filter);
	return (
		<div className="filterDiv">
			<Button size="large" variant="contained"  color="primary">
				<Link to='/' className="LinkStyle" >All Todo</Link>
			</Button>
			<Button size="large" variant="contained"  color="primary">
				<Link to='/uncompleted' className="LinkStyle">Uncompleted Todo</Link>
			</Button>
			<Button size="large" variant="contained" color="primary">
				<Link to='/completed' className="LinkStyle">Completed Todo</Link>
			</Button>
		</div>
		);
};

export default FilterComponent;