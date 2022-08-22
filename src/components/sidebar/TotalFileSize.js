import React from 'react'
import { db } from '../../Firebase.js';

import { useState, useEffect } from 'react';

import '../../styles/totalSize.css'

const TotalFileSize = () => {

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

    console.log(files)

    var totalSize = files.reduce((acc, cur) => acc + cur.item.size, 0)
    console.log(totalSize)

    const getReadableFileSizeString = (totalSize) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            totalSize = totalSize / 1024;
            i++;
        } while (totalSize > 1024);

        return Math.max(totalSize, 0.1).toFixed(1) + byteUnits[i];
    };

    const progressBarValue = (totalSize) => {
        let a = -1;
        do{
            totalSize = totalSize / 1024;
            a++;

        }   while (totalSize > 1024);

        return Math.max(totalSize, 0.1).toFixed(1);
    }



    return (
        <div className='totalSize_main'>
            <progress id="file" value={progressBarValue(totalSize)} max='10024' className='progress_bar'/>
            <p>{getReadableFileSizeString(totalSize)} of 10 MB used</p>

        </div>
    )
}

export default TotalFileSize