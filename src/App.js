import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AddTodoForm from "./containers/AddTodoContainer";
import TodosList from "./containers/TodosListContainer";
import FilterComponent from "./containers/FooterContainer";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>Todo App</h2>
          <AddTodoForm />
          <h2>List</h2>
          <TodosList />

          <Route exact path='/' render={() => (
            <FilterComponent filter={"allTodos"}/>
          )}/>         
          <Route exact path='/uncompleted' render={() => (
            <FilterComponent filter={"unCompletedTodos"}/>
          )}/>  
          <Route exact path='/completed' render={() => (
            <FilterComponent filter={"completedTodos"}/>
          )}/>  
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
