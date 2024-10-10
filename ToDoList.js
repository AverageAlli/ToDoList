// ToDoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './storage'; 

const ToDoList = () => {
  const [inputTodo, setInputTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const trimmedTodo = inputTodo.trim();
    if (trimmedTodo) {
      dispatch(addTodo(trimmedTodo));
      setInputTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleRemoveTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;