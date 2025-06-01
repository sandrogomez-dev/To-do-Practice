import React from 'react';
import TodoList from './components/TodoList';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

function App() {
  return (
    <div className="app">
      <h1>Mi Lista de Tareas</h1>
      <TodoList />
      </div>
  )
}
export default App;