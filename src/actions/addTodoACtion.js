import * as action from "../APIs/todosAPI.js";
import * as actionType from "../utilities/actionTypes.js"


const addTodoToAPI = data => {
	return {
		type: actionType.ADD_TODO,
		payload: data
	};
};

const postTodoToAPI = (id, content) => {
	return dispatch => {
		action.postTodoToAPI(id,content)
		.then(response => response.json())
		.then(data => dispatch(addTodoToAPI(data)))
	};
};

export default postTodoToAPI;