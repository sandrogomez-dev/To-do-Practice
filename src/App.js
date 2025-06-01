import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'; // ¡Faltaba este import!
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Aprender React', completed: false },
      { id: 2, text: 'Escribir código', completed: true }
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1>Mi Lista de Tareas</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;