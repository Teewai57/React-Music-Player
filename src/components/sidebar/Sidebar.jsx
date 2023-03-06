import React from 'react'
import "./Sidebar.css"
import SidebarButton from './SidebarButton'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src="https://previews.123rf.com/images/dragomirescu/dragomirescu1909/dragomirescu190900597/129835134-t-alphabet-letter-logo-design-suitable-for-a-company-or-business-pink-black-white-colors.jpg"
        alt="profile-image"
        className='profile-img'
         />
         <div>
          <SidebarButton title="" to="" icon=""/>
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
         </div>
         <SidebarButton />

    </div>
  )
}

export default Sidebar
