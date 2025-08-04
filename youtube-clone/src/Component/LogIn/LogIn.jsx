
import React, {useState} from 'react'
import'./LogIn.css';
import { FaYoutube } from "react-icons/fa";
import {Link} from'react-router-dom';

const LogIn = ({setLogInModal}) => {
  const [loginField , setloginField] = useState({"userName":"","password":""});
  console.log(loginField);

  const  handleOnChangeInput=(event,name)=>{
     setloginField({
      ...loginField,[name]:event.target.value
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
     <div className="login-btn">Login</div>
     <Link to={'/signup'} onClick={()=>setLogInModal()} className="login-btn">Signup</Link>
     <div className="login-btn"onClick={()=>setLogInModal()}>Cancel</div>

   </div>

        </div>
    </div>
  )
}

export default LogIn