import React from 'react';
import '../../styles/Header.css';

import DriveInLogo from '../../media/Logo.png'
import SearchIcon from '@mui/icons-material/Search';

import SettingsIcon from '@mui/icons-material/Settings';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import TodoList from './TodoList';

const index = ({ userPhoto }) => {

  var rootColors = document.querySelector(':root');
  var toggle = 0;



  const toggleDarkMode = () => {

    if (toggle === 0) {

      rootColors.style.setProperty('--appBackground', '#1e1f22');
      rootColors.style.setProperty('--white', '#0c0c0e');

      rootColors.style.setProperty('--hoverBlackTransparent', 'rgba(255,255,255,0.1)');
      rootColors.style.setProperty('--fileTextColor', 'rgba(255,255,255,0.5)');
      rootColors.style.setProperty('--fileTextColorHover', 'rgba(255,255,255,0.7)');
      rootColors.style.setProperty('--hrcolor', 'rgba(255,255,255,0.2)');

      toggle = 1;
    } else {

      rootColors.style.setProperty('--appBackground', '#F5F6FA');
      rootColors.style.setProperty('--white', '#fff');

      rootColors.style.setProperty('--hoverBlackTransparent', 'rgba(0,0,0,0.1)');
      rootColors.style.setProperty('--fileTextColor', 'rgba(0,0,0,0.5)');
      rootColors.style.setProperty('--fileTextColorHover', 'rgba(0,0,0,0.7)');
      rootColors.style.setProperty('--hrcolor', 'rgba(0,0,0,0.1)');

      toggle = 0;
    }

  }  

  return (
    <div className='header'>

        <div className='header_logo'>
            <img src={DriveInLogo} alt=''></img>
            <span className="logo_name">DriveIn</span>
        </div>
        <div className='header_searchContainer'>
            <div className='header_searchBar'>
                <SearchIcon sx={{ fontSize: 20, color: 'var(--fileTextColor)' }} />
                <input type='text' placeholder='Search...'/>
            </div>
        </div>
        <div className='header_icons'>

            <span>  
                <TodoList/>
                <WbSunnyOutlinedIcon sx={{ fontSize: 20, color: 'var(--fileTextColor)', margin: '10px', cursor: 'pointer' }}  onClick={toggleDarkMode}/>
                <SettingsIcon sx={{ fontSize: 20, color: 'var(--fileTextColor)', margin: '10px' }}/>
            </span>

            <img src={userPhoto} alt=''/>
        </div>

    </div>
  )
}

export default index
