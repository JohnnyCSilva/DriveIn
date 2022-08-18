import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../../styles/newFile.css';
import { useRef } from 'react'

//import app from '../../Firebase';
//import {storage, db} from '../../Firebase';


const NewFile = () => {

  const onButtonClick = () => {
   inputFile.current.click();
  };

  const inputFile = useRef(null)

  return (

    <div className='NewFile'>

        <div className='newFile_Container' onClick={onButtonClick}>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <p>Add File</p>
            <AddIcon sx={{ fontSize: 20, color: 'white', margin: '20px' }}/>
        </div>
    </div>
  )
}

export default NewFile