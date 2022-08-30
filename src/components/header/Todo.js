import React from 'react'

//import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


export function Todo({
    todo,
    toggleComplete,
    handleDelete,
    //handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);


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
        }}>

            {/*<button className='button-complete' onClick={() => toggleComplete(todo)}
                style={{
                    backgroundColor: todo.completed && "var(--mainColor)",
                }}
            ></button>
            <input type="checkbox"  className='button-complete'/>*/}
            <Checkbox onClick={() => toggleComplete(todo)} size='small' sx={{
                padding: 0.3,
                color: 'var(--fileTextColor)',
                '&.Mui-checked': {
                    color: 'var(--success)',
                }, 
                   
            }}/>

            <input
                style={{ textDecoration: todo.completed && "line-through", color: todo.completed && "var(--success)"}}
                type= 'text'
                value={todo.title === '' ? newTitle : todo.title}
                className='list'
                onChange={handleChange}
            />
                
                {/*<button className='button-edit' onClick={() => handleEdit(todo, newTitle)}>
                    <EditIcon id='i' sx={{
                                    verticalAlign: "middle", 
                                    fontSize: 20,
                                }}/>
                </button>*/}
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