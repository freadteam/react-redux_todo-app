import * as actionType from "../utilities/actionTypes.js"

const filterTodos = filterWord => {
	return {
		type: actionType.FILTER,
		payload: filterWord
	};
};


export default filterTodos;