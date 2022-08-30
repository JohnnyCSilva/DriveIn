import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { db } from '../../Firebase'

import FileItem from './FileItem'
import '../../styles/ViewFiles.css'

const ViewFiles = () => {

    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            console.log(snapshot);
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files);



        /*var byDate = setFiles.slice(0);
        byDate.sort(function(a,b) {
            return a.size - b.size;
        });*/

        //files.orderBy(size);

        /*const myData = [files].concat(this.state.data)
        .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
        .map((item, id) => 
            <div key={id}> {id} {item.caption} {item.timestamp} {item.fileUrl} {item.size}</div>
        );
        console.log(myData)*/

        const sortFiles = files.sort((a,b) => a.size > b.size)
        .map((item, id) => 
            <div key={id}> {id} {item.caption} {item.timestamp} {item.fileUrl} {item.size}</div>
        );

        //console.log('SORTED ' + sortFiles);


    const totalSize = files.reduce((acc, cur) => acc + cur.item.size, 0)
    console.log(totalSize)
            

  return (
    <div className='fileView'>
        <div className='fileView_row'>

        </div>
        
        <table className='tableTop'>
            <tbody>
            <tr>
                <td className='tdName'>File Name</td>
                <td className='tdAutor'>Autor</td>
                <td className='tdModify'>Last Modified</td>
                <td className='tdSize'>File Size</td>
                <td className='tdDownload'></td>
            </tr>
            </tbody>
        </table>

        {
            files.map(({ id, item }) => (
                <FileItem key={id} id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
            ))
        }

    </div>


  )
}


export default ViewFiles