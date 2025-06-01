import React, { use, useState } from 'react';


function AddTodo({ setTodos }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return; 

        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: Date.now(),
                text,
                completed: false
            }
            
        ]);
        setText(''); // Limpiar el campo de entrada
    }
    return(
        <form className='add-todo' onSubmit={handleSubmit}>
            <input type='text'
             placeholder='Nueva tarea'
             value={text}
             onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>Agregar</button>
        </form>
    );
}

export default AddTodo;


