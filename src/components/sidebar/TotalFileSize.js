import React from 'react'
import { db } from '../../Firebase.js';

import { useState, useEffect } from 'react';

import '../../styles/totalSize.css'

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';



const TotalFileSize = () => {

    var max = 50000000;
    const normalise = (value) => ((value - 0) * 100) / (max - 0);


    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 6,
        borderRadius: 6,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? 'var(--mainColor)' : '#308fe8',
        },
      }));

    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            //console.log(snapshot);
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    var totalSize = files.reduce((acc, cur) => acc + cur.item.size, 0)

    const getReadableFileSizeString = (totalSize) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            totalSize = totalSize / 1024;
            i++;
        } while (totalSize > 1024);

        return Math.max(totalSize, 0.1).toFixed(1) + byteUnits[i];
    };

    return (
        <div className='totalSize_main'>
            <BorderLinearProgress variant="determinate" value={normalise(totalSize)} className='progress_bar' />
            <p className="totalSizeP">{getReadableFileSizeString(totalSize)} of 50 MB used</p>
            <br/>
            

        </div>
    )
}

export default TotalFileSize