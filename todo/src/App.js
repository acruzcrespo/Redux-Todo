import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>To Do</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
