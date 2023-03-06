import React from 'react'
import { Link } from 'react-router-dom'
import "./SidebarButton.css"

function SidebarButton(props) {
  return (
    <Link to={props.to}>
        <div className='btn-body'>
            {props.icon}
            <p className='btn-title'>{props.title}</p>
        </div>
    </Link>
  )
}

export default SidebarButton