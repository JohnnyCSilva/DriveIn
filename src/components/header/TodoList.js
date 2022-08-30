import React from 'react'
import { useState } from 'react';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';


import AddIcon from '@mui/icons-material/Add';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import '../../styles/TodoList.css'

import { db } from '../../Firebase'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { Todo } from './Todo.js'



const TodoList = () => {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var date = today.toDateString()

    const [title, setTitle] = useState();
    const [state, setState] = useState(false);
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };  

    const handleSubmit = async (e) => {
      e.preventDefault();
      if ( title !== ''){
        await db.collection('ToDos').add({
          title,
          completed: false,
        });
        setTitle('');
      }
    }

    const [todos, setTodos] = useState([]);

    React.useEffect(() =>{
      const qry = query(collection(db, 'ToDos'));
      const unsub = onSnapshot(qry, (QuerySnapshot) => {
        let todosArray = [];
        QuerySnapshot.forEach((doc) => {
          todosArray.push({ ...doc.data(), id: doc.id })
        });
        setTodos(todosArray);
      });
      return () => unsub();
    }, []);

    const handleEdit = async (todo, title) => {
      await updateDoc(doc(db,'ToDos', todo.id), {title: title});
    };

    const toggleComplete = async (todo) => {
      await updateDoc(doc(db,'ToDos', todo.id),{
        completed: !todo.completed
      });
    };

    const handleDelete = async (id) => {
      await deleteDoc(doc(db,'ToDos', id))
    }
    
    const list = (anchor) => (
      <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350, backgroundColor: 'var(--appBackground)' }}> 
      <div className='ListMain-Container'>
      <List>
        <p className='tasks-p'>TASKS</p>
        <h5 className='tasks-h5'>Today: <span>{date}</span></h5>


        <div className='form-container'>
          <form onSubmit={handleSubmit}>  
            <div className='addForm'>
              <PlaylistAddIcon sx={{
                fontSize: 20,
                verticalAlign: 'middle'
              }}/>
              <input type='text' placeholder= 'Add Task...' value={title} onChange={(e) =>setTitle(e.target.value)}/>
            </div>
              <button> <AddIcon sx={{
                fontSize: 20,
                verticalAlign: 'middle'
              }}/></button>
          </form>
        </div>
        
        </List>
        <List>
          <div className='todo_container'>
            <p className='tasks-p'>Today's Tasks</p>
          {
            todos.map((todo)=> (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))
          }
          </div>
        </List>

      </div>
      </Box>
    );

  return (
    <div>
        
      {
      
        ['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <TaskAltIcon sx={{ fontSize: 20, color: 'var(--fileTextColor)', margin: '10px', cursor: 'pointer' }} onClick={toggleDrawer(anchor, true)}/>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
        
      ))}

    </div>
  )
}

export default TodoList