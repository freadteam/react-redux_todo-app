import * as action from "../APIs/todosAPI.js";
import * as actionType from "../utilities/actionTypes.js"


const addTodoToAPI = (id, content) => {
	return {
		type: actionType.ADD_TODO,
		payload: {
            'id': id,
            'content': content,
            'checked': false			
		}
	};
};

const postTodoToAPI = (id, content) => {
	return dispatch => {
		action.postTodoToAPI(id,content)
		.then(response => response.json())
		.then(dispatch(addTodoToAPI(id, content)))
	};
};

export default postTodoToAPI;