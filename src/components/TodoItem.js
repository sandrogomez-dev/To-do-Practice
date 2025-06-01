import React from "react";


function TodoItem({ text, completed}) {
    return (
        <li className="todo-item">
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </span>
        </li>
    );
}

export default TodoItem;
