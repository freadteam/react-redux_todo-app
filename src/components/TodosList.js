import React, { Component } from "react";
//material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import "./TodoList.css"


class TodosList extends Component {

	componentDidMount(){
    	const { loadTodosFromAPI } = this.props;
    	loadTodosFromAPI();
    	console.log(this.props.classes)
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
				<div className="listDiv" key={id}>	
					<List key={id}>
							<ListItem>
						         <Checkbox 
						            checked={completed}
						            color="primary"
						            onChange= { () => {
						            	putTodoToAPI(id, content, completed);
						            }}
						         />
								<ListItemText primary={content} />
						        <Button 
						        	variant="text" 
						        	color="primary"
						        	onClick={ () => {
						        		deleteTodoFromAPI(id);
						            }}
						         >
						        	<DeleteIcon />
						        </Button>
							</ListItem>
					</List>
				</div>
			);
	});
	return <ul>{list}</ul>		
	}
}

export default TodosList;