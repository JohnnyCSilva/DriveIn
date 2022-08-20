import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import '../../styles/FileItem.css'
import DownloadIcon from '@mui/icons-material/Download';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };


    return (
        <div className='fileItem'>
            <a href={fileUrl} download target='_blank' rel='noreferrer'>
                <table className='tableMain'>
                    <tbody>
                    <tr>
                        <td className='tdName'><ImageIcon /><p>{caption}</p></td>
                        <td className='tdAutor'><p>Autor</p></td>
                        <td className='tdModify'><p>{fileDate}</p></td>
                        <td className='tdSize'><p>{getReadableFileSizeString(size)}</p></td>
                        <td className='tdDownload'><DownloadIcon sx={{ fontSize: 15, color: '#A0A5BA' }}/></td>
                    </tr>    
                    </tbody>
                </table>             
            </a>
        </div>
      )
}

export default FileItem