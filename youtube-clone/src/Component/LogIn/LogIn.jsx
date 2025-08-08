
import React, {useState} from 'react'
import'./LogIn.css';
import { FaYoutube } from "react-icons/fa";
import {Link} from'react-router-dom';
import axios from'axios';


const LogIn = ({setLogInModal}) => {
  //state to manage username and password
  const [loginField , setloginField] = useState({"userName":"","password":""});
  console.log(loginField);
 // Update state when input fields change
  const  handleOnChangeInput=(event,name)=>{
     setloginField({
      ...loginField,[name]:event.target.value
     })
   
  }
// Handle user login
 const handleLoginFun = async() => {
   
  axios.post('http://localhost:4000/auth/login',loginField,{ withCredentials: true })
   .then((res)=>{
       // saving token and user details on successful login
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("userId",res.data.user._id)
        localStorage.setItem("userProfilePic",res.data.user.profilePic);
        window.location.reload();// Reload the page to update authentication status
    }).catch(err=>{
     console.log(err)
    })


 }


  return (
    <div className="login">
        <div className="logIn-card">
           <div className="titleCard-login">
            <FaYoutube  style={{ color: "red", fontSize: "54px" }} className='login-img'/>
            LogIn
           </div>
<div className="logIn-details">
    <div className="login-Info">
    <input type="text" placeholder='Username' className="username-login" value={loginField.userName} onChange={(e)=>handleOnChangeInput(e,"userName")}/>
</div>
<div className="login-Info">
    <input type="password" placeholder='Password' className="username-login" value={loginField.password}onChange={(e)=>handleOnChangeInput(e,"password")}/>
</div>
</div>

   <div className="login-buttons">
     <div className="login-btn"onClick={handleLoginFun}>Login</div>
     <Link to={'/signup'} onClick={()=>setLogInModal()} className="login-btn">Signup</Link>
     <div className="login-btn"onClick={()=>setLogInModal()}>Cancel</div>

   </div>

        </div>
        
    </div>
  )
}

export default LogIn