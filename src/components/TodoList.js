import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList({ todos, setTodos }) {
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <AddTodo setTodos={setTodos} />
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;