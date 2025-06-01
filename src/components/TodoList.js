import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";



function TodoList() {
    return (
        <div className="todo-list">
            <AddTodo />
            <ul>
                <TodoItem text="Comprar leche" /> completed={false}/>
                <TodoItem text="Hacer ejercicio" completed={true} />
                <TodoItem text="Leer un libro" completed={false} />
                <TodoItem text="Llamar a un amigo" completed={true} />
            </ul>
        </div>
        
    );
}

export default TodoList;