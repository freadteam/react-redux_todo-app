
import { connect } from "react-redux";
import TodosList from "../components/TodosList";
import loadTodosFromAPI from "../actions/loadTodosAction.js"

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
    	}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);