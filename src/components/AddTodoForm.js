import React, { Component } from "react";


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
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
					type="text"
					placeholder="add todo"
					autoFocus={true}
					value={this.state.content}
					required
					onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default AddTodoForm;