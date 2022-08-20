import React from 'react';
import '../../styles/Header.css';

import DriveInLogo from '../../media/Logo.png'
import SearchIcon from '@mui/icons-material/Search';

import SettingsIcon from '@mui/icons-material/Settings';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const index = ({ userPhoto }) =>{
  return (
    <div className='header'>

        <div className="header_logo">
            <img src={DriveInLogo} alt=''></img>
            <span className="logo_name">DriveIn</span>
        </div>
        <div className='header_searchContainer'>
            <div className='header_searchBar'>
                <SearchIcon sx={{ fontSize: 20, color: '#A0A5BA' }} />
                <input type='text' placeholder='Search...'/>
            </div>
        </div>
        <div className='header_icons'>

            <span>
                <WbSunnyOutlinedIcon sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/>
                <SettingsIcon sx={{ fontSize: 20, color: '#A0A5BA', margin: '5px' }}/>
            </span>

            <img src={userPhoto} alt="User Photo"/>
        </div>

    </div>
  )
}

export default index
