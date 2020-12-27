import './App.css';
import React, {useState} from "react";
import Form from './Form.js';

function App() {
  const [todos, setTodos] = useState([]);

  //takes a todo and adds it to the beginning of list of todos
  function add(todo) {
    setTodos([todo, ...todos]); //adds new todo to the beginning of array, the rest is old todos
  }

  return (
    <div className="App">
      <h1>Add to your TodoList!</h1>
      <Form add={add}/>
    </div>
  );
}

export default App;
