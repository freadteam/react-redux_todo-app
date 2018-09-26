import * as actionType from "../utilities/actionTypes.js";

//completedのtrue、falseで表示を変える。
//すべて表示するためにtrueとfalse療法が必要なので二つ条件を用意した
const initailState = "allTodos"

const filter = (state=initailState, action) => {
	switch (action.type) {
		case actionType.FILTER:
			return action.payload;
		default:
			return state;
	}
};

export default filter;