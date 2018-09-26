import React from "react";
import { Link } from 'react-router-dom';

const FilterComponent = ({ filterTodos, filter})=> {
	filterTodos(filter);
	return (
		<div>
			<button>
				<Link to='/'>All Todo</Link>
			</button>
			<button>
				<Link to='/uncompleted'>Uncompleted Todo</Link>
			</button>
			<button>
				<Link to='/completed'>Completed Todo</Link>
			</button>
		</div>
		);
};

export default FilterComponent;