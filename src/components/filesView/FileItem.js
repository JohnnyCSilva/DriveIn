import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import '../../styles/FileItem.css'
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import WestIcon from '@mui/icons-material/West';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { saveAs } from 'file-saver'

import firebase from 'firebase/compat/app';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {

    var fileType = React.useState(null)    

    const [open, setOpen] = React.useState(false);

    const fileIcon = () => {
        if (fileUrl.includes('.doc') || fileUrl.includes('.xlsx') || fileUrl.includes('.csv')){
            return <span><DescriptionIcon  sx={{
                verticalAlign: "middle", 
                fontSize: 20}} /></span>
        } else if (fileUrl.includes('.pdf') || fileUrl.includes ('.pdf')){
            return <span><PictureAsPdfIcon  sx={{
                verticalAlign: "middle", 
                fontSize: 20}} /></span>
        } else if (fileUrl.includes('.txt')){
            return <span><ArticleIcon  sx={{
                verticalAlign: "middle", 
                fontSize: 20}} /></span>
        } else {
            return <span><ImageIcon  sx={{
                verticalAlign: "middle", 
                fontSize: 20}}/></span>
        }
        
    }

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

    const handleClickOpen = () => {
        setOpen(true);

        if (fileUrl.includes('.png') || fileUrl.includes('.PNG') || fileUrl.includes('.jpg') || fileUrl.includes('.JPG') || fileUrl.includes('.jpeg') || fileUrl.includes('.JPEG') || fileUrl.includes('.webp') || fileUrl.includes('.WEBP')){

            fileType = true
            console.log(fileType)

        } else if (fileUrl.includes('.txt')){    

            fileType = false
            console.log(fileType)
        }
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    // delete file from firestore and database
    const deleteFileFromDb = () => {

        const fileRef = firebase.storage().refFromURL(fileUrl);
        const db = firebase.firestore();

        // apaga storage
        fileRef.delete().then(function () {
            console.log("apagado");
        }).catch(function (error) {
            console.log(error);
        });
        

        //delete file from db
        db.collection("myFiles").doc(id).delete().then(function () {
            console.log("apagadated");
        }).catch(function (error) {
            console.error(error);
        });
        
        setOpen(false);
    }      

    // read fileContent if its .txt

    // read file from firebase and show it
                    
    
    const downloadImage = () => {        
        saveAs(fileUrl, caption)
    }

    return (
        <div className='fileItem'>
            <b onClick={handleClickOpen}>
                <table className='tableMain'>
                    <tbody>
                    <tr>
                        <td className='tdName'>{fileIcon(fileUrl)}<p>{caption}</p></td>
                        <td className='tdAutor'><p>Autor</p></td>
                        <td className='tdModify'><p>{fileDate}</p></td>
                        <td className='tdSize'><p>{getReadableFileSizeString(size)}</p></td>
                        <td className='tdDownload'><DownloadIcon sx={{ fontSize: 15, color: 'var(--fileTextColor)' }}/></td>
                    </tr>    
                    </tbody>
                </table>             
            </b>

            <Dialog
                open={open}
                fullScreen={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                 <DialogTitle id="alert-dialog-title">
                    <div className="file_infoContainer">
                        <div className="file_info">
                            <button onClick={handleClose} className="btn_close">
                                <WestIcon sx={{
                                    verticalAlign: "middle", 
                                    fontSize: 20,
                                }}/> 
                            </button>                          
                            <h3 className="fileName">{fileIcon(fileUrl)}<span>{caption}</span></h3>
                        </div>
                        <div className="file_btns">
                            <button onClick={downloadImage} className="btn_download">
                                <CloudDownloadIcon sx={{
                                    verticalAlign: "middle", 
                                    fontSize: 20,
                                }}/> 
                            </button>
                            <button onClick={deleteFileFromDb} className="btn_delete">
                                <DeleteIcon sx={{
                                    verticalAlign: "middle", 
                                    fontSize: 20,
                                }}/>
                            </button>
                        </div>
                    </div>
                </DialogTitle>
                
                <DialogContent onClick={handleClose}>
                    <div className="fullscreen">
                        {
                        fileType ? (
                            <iframe src={fileUrl} title={caption} className="iframe_opened">falho</iframe>                        
                        )  : (
                            <img src={fileUrl} alt="" className="img_opened"></img> 
                        )
                        }   
                    </div>
                </DialogContent>
                
            </Dialog>           
        </div>
      )
}

export default FileItem