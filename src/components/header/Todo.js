import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


export function Todo({
    todo,
    toggleComplete,
    handleDelete,
    //handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);

    //const [checked, setChecked] = React.useState();


    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true){
            setNewTitle(todo.title)
        } else {
            todo.title = '';
            setNewTitle(e.target.value)
        }
    }

    return (
        <div className='todo' style={{ 
            borderColor: todo.completed && "var(--success)",
        }} id={todo.complete}>

            <Checkbox onClick={() => toggleComplete(todo)} size='small' sx={{
                padding: 0.3,
                color: 'var(--fileTextColor)',
                '&.Mui-checked': {
                    color: 'var(--success)',
                }, 
            }}
            checked={todo.completed && true} />

            <input
                style={{ textDecoration: todo.completed && "line-through", color: todo.completed && "var(--success)"}}
                type= 'text'
                value={todo.title === '' ? newTitle : todo.title}
                className='list'
                onChange={handleChange}
            />
                
                <p></p>
            <button className='button-delete' onClick={() => handleDelete(todo.id)}
                style={{ visibility: todo.completed && "visible"}}
            >
                    <DeleteIcon id='i' sx={{
                        fontSize: 17,
                        verticalAlign: "middle",
                    }}/>
            </button>

        </div>
    )
}