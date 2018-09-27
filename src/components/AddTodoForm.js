import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import "./AddTodoForm.css"


class AddTodoForm extends Component {
	constructor() {
		super();
		this.state = {content: ""}
	}

	handleChange = event => {
		this.setState({content: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault();
		const {counter, postTodoToAPI} = this.props;
		const content = this.state.content;
		postTodoToAPI(counter, content);
		this.setState({content: ""})
	}

	render() {
		return(
			<div className="addTodoFrom">
				<form onSubmit={this.handleSubmit}>
        			<Input
        				type="text"
				        placeholder="Write Todo!"
				        onChange={this.handleChange}
				        value={this.state.content}
				        autoFocus
				        required
				        fullWidth
				     />
				</form>
			</div>
		);
	}
}

export default AddTodoForm;