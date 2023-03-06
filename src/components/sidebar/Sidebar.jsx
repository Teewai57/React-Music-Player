import React from 'react'
import "./Sidebar.css"
import SidebarButton from './SidebarButton'
import {FaGripfire, FaPlay} from "react-icons/fa"
import {MdFavorite} from "react-icons/md";
import { FaSignOutAlt } from 'react-icons/fa';
import {IoLibrary} from "react-icons/io5";
import { MdSpaceDashboard } from 'react-icons/md';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src="https://previews.123rf.com/images/dragomirescu/dragomirescu1909/dragomirescu190900597/129835134-t-alphabet-letter-logo-design-suitable-for-a-company-or-business-pink-black-white-colors.jpg"
        alt="profile-image"
        className='profile-img'
         />
         <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
          <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
          <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
         </div>
         <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>

    </div>
  )
}

export default Sidebar
