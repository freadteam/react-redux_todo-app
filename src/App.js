import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AddTodoForm from "./containers/AddTodoContainer";
import TodosList from "./containers/TodosListContainer";
import FilterComponent from "./containers/FooterContainer";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">

            <AppBar position="static">
              <Toolbar variant="dense">
                <h2>Todo_App</h2>   
              </Toolbar>
            </AppBar>

            <AddTodoForm />  

            <Route exact path='/' render={() => (
              <FilterComponent filter={"allTodos"}/>
            )}/>         
            <Route exact path='/uncompleted' render={() => (
              <FilterComponent filter={"unCompletedTodos"}/>
            )}/>  
            <Route exact path='/completed' render={() => (
              <FilterComponent filter={"completedTodos"}/>
            )}/> 
            
            <TodosList />  
            
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
