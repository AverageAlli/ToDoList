import React from 'react';
import ToDoList from './ToDoList'; 

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>To-Do List Application</h1>
      </header>
      <main>
        <ToDoList /> 
      </main>
    </div>
  );
};

export default App;