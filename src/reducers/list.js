import * as actionType from "../utilities/actionTypes.js";


const initialTodos = {
	todos: [
		// {id: -2, content: "hoge", completed: false},
		// {id: -1, content: "fuga", completed: true}
	],
     counter: 0
}

const list = (state = initialTodos, action) => {
	switch (action.type) {
		case actionType.ADD_TODO:
			return Object.assign(
				{}, 
				state,
				{	
					todos: [...state.todos, action.payload],
     				counter: state.counter + 1				
				}
			);

		case actionType.LOAD_TODOS:
			return Object.assign(
				{}, 
				state,
				{	
					todos: action.payload,
     				counter: state.counter					
				}
			);

		default:
			return state;
	}
}

export default list;