import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import '../../styles/FileItem.css'

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
            <a href={fileUrl} download target='_blank'>
                {/*<div className='fileItem-left'>
                    <ImageIcon />
                    <p>{caption}</p>
                </div>
                <div className='fileItem-middle'>
                    <p>Autor</p>
                </div>
                <div className='fileItem-right'>
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
                </div>  */}
                <table className='tableMain'>
                    <tr>
                        <td className='tdName'><ImageIcon /><p>{caption}</p></td>
                        <td className='tdAutor'><p>Autor</p></td>
                        <td className='tdModify'><p>{fileDate}</p></td>
                        <td className='tdSize'><p>{getReadableFileSizeString(size)}</p></td>
                    </tr>    
                </table>             
            </a>
        </div>
      )
}

export default FileItem