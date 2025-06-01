import React from 'react';


function AddTodo() {
    return(
        <form className='add-todo'>
            <input type='text' placeholder='Nueva tarea' />
            <button type='submit'>Agregar</button>
        </form>
    );
}

export default AddTodo;


