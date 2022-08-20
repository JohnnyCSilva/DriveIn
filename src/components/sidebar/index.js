import React from 'react'
import NewFile from './NewFile';
import SidebarItem from './sidebarItem';
import '../../styles/Sidebar.css';

import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import MonitorIcon from '@mui/icons-material/Monitor';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import  ViewFiles  from '../filesView/ViewFiles.js';

const index = () => {
  
  return (
    <div className='sideBar'>

        <NewFile/>

        <div className='sideBar_itemsContainer'>

            <SidebarItem icon={(<PieChartOutlineIcon  sx={{ fontSize: 20, color: '#752BDF', margin: '5px' }}/> )} label={'All Files'} />

            <SidebarItem icon={(<MonitorIcon  sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/> )} label={'Computers'} />
            <SidebarItem icon={(<AccessTimeIcon  sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/> )} label={'Recent'} />
            <SidebarItem icon={(<StarBorderIcon  sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/> )} label={'Stared'} />
            <SidebarItem icon={(<DeleteOutlineIcon  sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/> )} label={'Deleted'} />
            <hr/>
            <SidebarItem icon={(<CloudQueueIcon  sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/> )} label={'Storage'} />

            {/*<p>{totalSize}</p>*/}
        
        </div>

    </div>
  )
}

export default index