import React from 'react'
import '../../styles/sidebarItem.css';


const SidebarItem = ({icon, label}) => {

  return (
    <div className='sidebarItem'>

        <div className='sidebarItem_main'>

            {icon}
            <p>{label}</p>

        </div>

    </div>
  )
}

export default SidebarItem