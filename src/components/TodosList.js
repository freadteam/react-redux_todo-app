import React, { Component } from "react";

class TodosList extends Component {

	componentDidMount(){
    	const { loadTodosFromAPI } = this.props;
    	loadTodosFromAPI();
  	} 

	render() {
		const {todos} = this.props
		const list = todos.map(todo => {
			return ( 
				<li key={todo.id}>
					<input 
			            type="checkbox" 
			            checked={todo.completed}
			            onChange= { () => {
			            	//切り替え
			            }}
			         />
			        {todo.id}
					{todo.content}
			        <button
			        	onClick={ () => {
			        		//消す
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


