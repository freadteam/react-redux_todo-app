
import { connect } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import postTodoToAPI from "../actions/addTodoACtion.js"

const mapStateToProps = state => {
	return {
		counter: state.list.counter
	};
};

const mapDispatchToProps = dispatch => {
    return {
    	postTodoToAPI: (id, content) => {
    		dispatch(postTodoToAPI(id, content));
    	}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);