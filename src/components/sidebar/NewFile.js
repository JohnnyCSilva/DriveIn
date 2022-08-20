import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/newFile.css';
import { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import { storage, db } from '../../Firebase.js';


const NewFile = () => {

  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const onButtonClick = () => {
   inputFile.current.click();
  };



  const handleChange = (e) =>{
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }

    console.log(e.target.files[0]);

  }

  const handleUpload = () => {
    setUploading(true)

    console.log(file)

      storage.ref(`files/${file.name}`).put(file).then(snapshot => {
          console.log(snapshot)

          storage.ref('files').child(file.name).getDownloadURL().then(url => {

              db.collection('myFiles').add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  caption: file.name,
                  fileUrl: url,
                  size: snapshot._delegate.bytesTransferred,
              })

              setUploading(false)
              setFile(null)
          })

          storage.ref('files').child(file.name).getMetadata().then(meta => {
              console.log(meta.size)
          })

    })
  }

  const inputFile = useRef(null)

  return (

    <div className='NewFile'>

        <div className='newFile_Container' onClick={onButtonClick} onMouseOut={handleUpload}>
            <input type='file' id='file' ref={inputFile} onChange={handleChange} style={{display: 'none'}}/>
            <p>Add File</p>
            <AddIcon sx={{ fontSize: 20, color: 'white', margin: '20px' }}/>

            
            
        </div>
        <div className='newFile_Filer'>

          {
              uploading ? (
                /*<div className='loader_before'>
                  <div className='loader'></div>
                </div>*/ <></>
              ) : (
                <>
                  
                </>
              )
            }

        </div>

    </div>
  )
}

export default NewFile  