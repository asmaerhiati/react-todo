import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect(() =>{
    getLocalTodos();
  }, []);

  useEffect(() => {
    filteredTodosHandler();
    saveLocalTodos();
  }, [todos, status]);
  

  //function
  const filteredTodosHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save local storage
  const saveLocalTodos = () => {
    if (todos.length > 0) 
      localStorage.setItem('todos', JSON.stringify(todos));
};
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let todoloc = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoloc);
  }
};
        
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
    <Form 
      todos = { todos }
      setTodos = { setTodos } 
      inputText = { inputText } 
      setInputText = { setInputText }
      setStatus = { setStatus }
    />
      <TodoList setTodos = {setTodos} todos = { todos } filteredTodos ={ filteredTodos }/>
    </div>
  );
}

export default App;
