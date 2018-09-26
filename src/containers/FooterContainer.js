import { connect } from "react-redux";
import FilterComponent from "../components/FilterComponent"
import filterTodos from "../actions/filterTodosAction"

const mapDispatchToProps = dispatch => {
    return {
    	filterTodos: filterWord => {
    		dispatch(filterTodos(filterWord));
    	}
    };
};

export default connect(null, mapDispatchToProps)(FilterComponent);