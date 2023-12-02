import React from 'react';
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaUserPen } from "react-icons/fa6";


function NavBar() {
  const NavData = [
    {
      id: 1,
      title: 'Home',
      icon: <LuMessagesSquare size={16}/>,
      url: 'google',
    },{
      id: 2,
      title: 'About',
      icon: <IoMdInformationCircleOutline size={16}/>,
      url: 'google',
    },{
      id: 3,
      title: 'Reviews',
      icon: <FaUserPen size={16}/>,
      url: 'google',
    }
  ]
  return (
    <nav className='NavBarItems'>
      <h1 className='logo'>
        BuzzBurst&nbsp;<LuMessagesSquare size={30}/>
      </h1>
      <ul className='NavMenu'>
        {NavData.map(({id, title, icon, url}) =>(
        <li key={id}><a href={url} className='nav-a'>{icon}&nbsp;{title}</a></li>
        ))}
        <li><a href="google" className='action'>Login</a></li>
        <li><a href="google" className='action'>Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default NavBar