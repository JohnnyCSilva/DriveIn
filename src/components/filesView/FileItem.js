import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import '../../styles/FileItem.css'
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

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

    const openFile = () => {

        var popup = document.createElement("dialog");

        document.body.appendChild(popup);

        /*const btn_download = document.createElement("a");

        btn_download.innerHTML = "Download";
        btn_download.setAttribute('download', `${fileUrl}.txt`);*/

        const image = document.createElement('img');

        if (fileUrl.includes('.jpg') || fileUrl.includes('.png') || fileUrl.includes('.jpeg') || fileUrl.includes('.JPEG') || fileUrl.includes('.PNG') || fileUrl.includes('.JPG')) {
            image.setAttribute( 'src', fileUrl );
            image.setAttribute('alt', 'image');

            popup.appendChild(image);
            popup.showModal();

        } else {

            if (window.confirm("Open File in New Tab?")) {
                window.open(fileUrl, '_blank');
            }  else {
                return;
            }
        }        

        
        //popup.appendChild(btn_download);

        // Fecha quando clicar fora da imagem
        popup.addEventListener('click', function (e) {
            if (e.target === popup) {
                popup.close();
            }
        });
    }   

    // if file = image then show image else show file icon
    const fileIcon = (fileUrl.includes('.jpg') || fileUrl.includes('.png') || fileUrl.includes('.jpeg') || fileUrl.includes('.JPEG') || fileUrl.includes('.PNG') || fileUrl.includes('.JPG')) ? <ImageIcon /> : <DescriptionIcon />;


    return (
        <div className='fileItem'>
            <b onClick={openFile}>
                <table className='tableMain'>
                    <tbody>
                    <tr>
                        <td className='tdName'>{fileIcon}<p>{caption}</p></td>
                        <td className='tdAutor'><p>Autor</p></td>
                        <td className='tdModify'><p>{fileDate}</p></td>
                        <td className='tdSize'><p>{getReadableFileSizeString(size)}</p></td>
                        <td className='tdDownload'><DownloadIcon sx={{ fontSize: 15, color: '#A0A5BA' }}/></td>
                    </tr>    
                    </tbody>
                </table>             
            </b>
        </div>
      )
}

export default FileItem