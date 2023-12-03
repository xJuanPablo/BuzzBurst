import React, { useState } from 'react';
import { LuMessagesSquare } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaUserPen } from "react-icons/fa6";
import '@fortawesome/fontawesome-free/css/all.css';


function NavBar() {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  }

  const NavData = [
    {
      id: 1,
      title: 'Home',
      icon: <LuMessagesSquare size={16} />,
      url: '/#hero',
    }, {
      id: 2,
      title: 'About',
      icon: <IoMdInformationCircleOutline size={16} />,
      url: '/#overview',
    }, {
      id: 3,
      title: 'Testimonials',
      icon: <FaUserPen size={16} />,
      url: '/#testimonials',
    }
  ]

  return (
    <nav className='NavBarItems'>
      <h1 className='logo'>
        BuzzBurst&nbsp;<LuMessagesSquare size={30} />
      </h1>
      <div>
        <div onClick={handleClick} className='menuIcons'>
          <i className={clicked ? "fa fa-times" : "fas fa-bars"}>
          </i>
        </div>
      </div>
      <ul className={clicked ? "NavMenu active" : "NavMenu"}>
        {NavData.map(({ id, title, icon, url }) => (
          <li key={id}><a href={url} className='nav-a'>{icon}&nbsp;{title}</a></li>
        ))}
        <li><a href="/login" className='action'>Login</a></li>
        <li><a href="google" className='action'>Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
