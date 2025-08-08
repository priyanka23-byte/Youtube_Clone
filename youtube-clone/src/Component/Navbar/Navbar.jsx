import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import {Link , useNavigate} from 'react-router-dom'
import LogIn from "../LogIn/LogIn";
import axios from'axios';

const Navbar = ({sideNavbar, sidebar}) => {
   // State to hold user profile picture URL; default icon if none found
  const [userPic, setUserPic] = useState(
    "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
  );
//state to control dropdown
  const[navbarModal,setNavbarModal] = useState(false);
//state to control login
  const[logIn, setLogIn]= useState(false);
  //authentication status 
  const[isLogedIn,setLogedIn] = useState(false);


  const navigate = useNavigate();
//togle the profile modal display on user icon display
  const handleClickModal=()=>{
    setNavbarModal(prev=>!prev);
  }
  //toggle side navbar state when hamburger clicked
  const sideNavbarfunc=()=>{
    sideNavbar(!sidebar)
  }
//navigate to login user profile page
 const handleprofile=()=>{
  let userId = localStorage.getItem("userId");
  navigate(`/user/${userId}`);
  setNavbarModal(false);
 }

 const setLogInModal =()=>{
  setLogIn(false);
 }

//handle clicks on login/logout
 const onclickOfPopUpOption = (button) => {
  setNavbarModal(false);
  if (button === "login") {
    setLogIn(true);
  } else {
    //logout process
    localStorage.clear();
    getLogoutFun();
    setTimeout(()=>{
      navigate('/')
      window.location.reload();
    },2000);
  }
};
//call logout 
const getLogoutFun = async()=>{
  axios.post("http://localhost:4000/auth/logout",{},{ withCredentials:true})
  .then((res)=>{
   console.log("logout")
  }).catch(err=>{
    console.log(err)
  })
}

//to check user loginstatus and profilepic  fom localstorage
useEffect(()=>{
   let userProfilePic = localStorage.getItem("userProfilePic");
   setLogedIn(localStorage.getItem('userId')!==null?true:false);
  if(userProfilePic!==null){
    setUserPic(userProfilePic);
  }
},[])


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

        
 {/* User profile picture clickable for dropdown modal */}
        <img onClick={handleClickModal} src={userPic} alt="icon" className="user-icon" />
 {/* Conditional rendering of profile dropdown modal */}
       { navbarModal && 
        <div className="navbar-modal">

          {isLogedIn && <div className="navbar-modal-option" onClick={handleprofile}>Profile</div>}
          {!isLogedIn && <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("login")}>Login</div>}
          {isLogedIn && <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("logout")}>Logout</div>}

        </div>
        }
        
      </div>
{/* Render Login modal popup conditionally */}
        { logIn && <LogIn setLogInModal={setLogInModal} /> }

    </div>
  );
};

export default Navbar;
