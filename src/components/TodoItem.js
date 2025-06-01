import React from 'react';

function TodoItem({ todo, onToggle }) {
  return (
    <li 
      className="todo-item"
      onClick={() => onToggle(todo.id)}
    >
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#333'
      }}>
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;