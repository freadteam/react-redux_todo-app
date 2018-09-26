import React, { Component } from "react";

class TodosList extends Component {

	componentDidMount(){
    	const { loadTodosFromAPI } = this.props;
    	loadTodosFromAPI();
  	} 

	render() {
		const {todos, filter, putTodoToAPI, deleteTodoFromAPI} = this.props;

		let filteredTodos = todos;
		if (filter==="unCompletedTodos") {
			filteredTodos = todos.filter(todo => todo.completed === false);
		} else if (filter==="completedTodos") {
			filteredTodos = todos.filter(todo => todo.completed === true);
		};
		
		const list = filteredTodos.map(todo => {
			const {id, content, completed} = todo;
			return ( 
				<li key={id}>
					<input 
			            type="checkbox" 
			            checked={completed}
			            onChange= { () => {
			            	putTodoToAPI(id, content, completed);
			            }}
			         />
					{content}
			        <button
			        	onClick={ () => {
			        		deleteTodoFromAPI(id);
			            }}
			         >
			        	delete
			        </button>
				</li>
			);
	});
	return <ul>{list}</ul>		
	}
}

export default TodosList;