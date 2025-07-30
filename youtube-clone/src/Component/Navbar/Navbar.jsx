
import React from 'react';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <div className='navbar'>
  <div className="navbar-left">
    <div className="navbar-hamburger">
      <IoMenu className="menu-icon" />  
    </div>
    <div className="navbar-logo">  
      <FaYoutube className="yt-icon" />
      <span className="navbar-youtubetext">YouTube</span>
    </div>
  </div>

  <div className='navbar-middle'>
    <input type="text" placeholder='Search' className='search-input'/>
    <button className='search-btn'><IoMdSearch className='search-icon' /></button>
    <button className='mic-btn'><FaMicrophone  className='mic-icon'/></button>
  </div>

  <div className="navbar-right">
    <MdOutlineVideoCall className="video-icon" />
    <FaRegBell className="bell-icon"/>
    <CgProfile className="user-icon"/>
    
  </div>
</div>

  )
}

export default Navbar