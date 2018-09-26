import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import AddTodoForm from "./containers/AddTodoContainer";
import TodosList from "./containers/TodosListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo App</h2>
        <AddTodoForm />
        <h2>List</h2>
        <TodosList />
      </div>
    );
  }
}

export default App;
