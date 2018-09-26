import * as actionType from "../utilities/actionTypes.js";


const initialTodos = {
	todos: [
		// {id: -2, content: "hoge", completed: false},
		// {id: -1, content: "fuga", completed: true}
	],
     counter: 0
}

const list = (state = initialTodos, action) => {
	const copiedTodos = state.todos.slice(0);
	const payload = action.payload;
	switch (action.type) {
		case actionType.ADD_TODO:
			return Object.assign(
				{}, 
				state,
				{	
					todos: [...state.todos, payload],
     				counter: state.counter + 1				
				}
			);

		case actionType.LOAD_TODOS:
			return Object.assign(
				{}, 
				state,
				{	
					todos: payload					
				}
			);

		case actionType.CHANGE_COMPLETED:
			const changedTodo = payload;
			const selectedindex = copiedTodos.findIndex(todo => {
        		return todo.id === changedTodo.id;
    		});
			copiedTodos[selectedindex] = changedTodo;
			return Object.assign(
				{}, 
				state,
				{	
					todos: copiedTodos	
				}
			);

			case actionType.DELETE_TODO:
				const selectedTodos = copiedTodos.filter(todo => {
					return payload !== todo.id;
				});
				return Object.assign(
					{}, 
					state,
					{	
						todos: selectedTodos				
					}
			);

		default:
			return state;
	}
}

export default list;