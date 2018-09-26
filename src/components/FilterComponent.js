import React from "react"

const FilterComponent = ({ filterTodos})=> {
	return (
		<div>
			<button onClick={ () => {
			 	filterTodos("allTodos");
			}}>
				All Todo
			</button>
			<button onClick={ () => {
			 	filterTodos("unCompletedTodos");
			}}>
				Uncompleted Todo
			</button>
			<button onClick={ () => {
			 	filterTodos("completedTodos");
			}}>
				Completed Todo
			</button>
		</div>
		);
};

export default FilterComponent;