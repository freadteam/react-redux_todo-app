import React, { Component } from "react";

class TodosList extends Component {

	componentDidMount(){
    	const { loadTodosFromAPI } = this.props;
    	loadTodosFromAPI();
  	} 

	render() {
		const {todos, putTodoToAPI, deleteTodoFromAPI} = this.props;
		const list = todos.map(todo => {
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
			        {id}
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


