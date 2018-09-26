import * as action from "../APIs/todosAPI.js";
import * as actionType from "../utilities/actionTypes.js"


const getTodos = data => {
	return {
		type: actionType.LOAD_TODOS,
		payload: data
	};
};

const loadTodosFromAPI = () => {
	return dispatch => {
		action.loadTodosFromAPI()
		.then(response => response.json())
		.then(data => dispatch(getTodos(data)))
	};
};

export default loadTodosFromAPI;