import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import {Link , useNavigate} from 'react-router-dom'
import LogIn from "../LogIn/LogIn";

const Navbar = ({sideNavbar, sidebar}) => {
  const [userPic, setUserPic] = useState(
    "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
  );

  const[navbarModal,setNavbarModal] = useState(false);

  const[logIn, setLogIn]= useState(false);


  const navigate = useNavigate();

  const handleClickModal=()=>{
    setNavbarModal(prev=>!prev);
  }
  const sideNavbarfunc=()=>{
    sideNavbar(!sidebar)
  }

 const handleprofile=()=>{
  navigate('/user/7869');
  setNavbarModal(false);
 }

 const setLogInModal =()=>{
  setLogIn(false);
 }

 const onclickOfPopUpOption = (button) => {
  setNavbarModal(false);
  if (button === "login") {
    setLogIn(true);
  } else {
    
  }
};

  return (
    <div className="navbar">
      {/*----------------------left section------------- */}
      <div className="navbar-left">
        <div className="navbar-hamburger" onClick={sideNavbarfunc}>
          <IoMenu className="menu-icon" />
        </div>
        <Link to ={'/'} className="navbar-logo">
          <FaYoutube className="yt-icon" />
          <span className="navbar-youtubetext">YouTube</span>
        </Link>
      </div>
      {/*-----------------------------middle section-------------------*/}
      <div className="navbar-middle">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">
          <IoMdSearch className="search-icon" />
        </button>
        <button className="mic-btn">
          <FaMicrophone className="mic-icon" />
        </button>
      </div>
      {/*-----------right section ------------------------------------*/}
      <div className="navbar-right">
        <Link to={'/765/upload'}>
        <MdOutlineVideoCall className="video-icon" />
        </Link>
        <FaRegBell className="bell-icon" />

        

        <img onClick={handleClickModal} src={userPic} alt="icon" className="user-icon" />

       { navbarModal && 
        <div className="navbar-modal">
          <div className="navbar-modal-option" onClick={handleprofile}>Profile</div>
           <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("login")}>Login</div>
            <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("logout")}>Logout</div>

        </div>
        }
        
      </div>

        { logIn && <LogIn setLogInModal={setLogInModal} /> }

    </div>
  );
};

export default Navbar;
