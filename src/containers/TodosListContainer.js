import { connect } from "react-redux";
import TodosList from "../components/TodosList";
import loadTodosFromAPI from "../actions/loadTodosAction";
import putTodoToAPI from "../actions/changeCompleted";
import deleteTodoFromAPI from "../actions/deleteTodoFromAPI";


// state のどの部分を、どういう名前で componentsにprops として渡すかを定義する
const mapStateToProps = state => {
  return {
    todos: state.list.todos
  };
};

const mapDispatchToProps = dispatch => {
    return {
    	loadTodosFromAPI: () => {
  				dispatch(loadTodosFromAPI())
    	},
    	putTodoToAPI: (id, content, completed) => {
    		dispatch(putTodoToAPI(id, content, completed))
    	},
    	deleteTodoFromAPI: id => {
    		dispatch(deleteTodoFromAPI(id))
    	}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);