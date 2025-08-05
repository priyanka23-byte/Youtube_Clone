import React, {useState} from 'react'
import './SignUp.css'
import { FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from 'axios';


const SignUp = () => {
const[uploadedImageUrl,setUploadedImageUrl]= useState("https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=360")
const [signupField , setSignupField] = useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl});


const handleInputField=(event,name)=>{
    setSignupField({
        ...signupField,[name]:event.target.value
    })
}

console.log(signupField);

const uploadImage= async(e)=>{
const files = e.target.files;

const data = new FormData();
data.append('file',files[0]);
data.append('upload_preset','youtube-clone');
data.append('cloud_name','dg4wgozjr')
try{
  const response = await axios.post(" https://api.cloudinary.com/v1_1/dg4wgozjr/image/upload",data);
  const imageUrl =response.data.url;
  setUploadedImageUrl(imageUrl);
  setSignupField({
        ...signupField,"profilePic":imageUrl
    })
}catch(err){
    console.log(err);
}
}


  return (
    <div className="signUp">
        <div className="signUp-card">
            <div className="signup-title">
                 <FaYoutube  style={{ color: "red", fontSize: "54px" }} className='signup-img'/> 
                SignUp
            </div>

   <div className="sign-details">
    <input type="text" className="signup-input" value={signupField.channelName} onChange={(e)=>{handleInputField(e,"channelName")}} placeholder='Channel Name' />
    <input type="text" className="signup-input" value={signupField.userName} onChange={(e)=>{handleInputField(e,"userName")}} placeholder='User Name' />
    <input type="password" className="signup-input" value={signupField.password} onChange={(e)=>{handleInputField(e,"password")}} placeholder='Password' />
    <input type="text" className="signup-input" value={signupField.about} onChange={(e)=>{handleInputField(e,"about")}} placeholder=' About your Channel ' />

   <div className="signupImg-upload">
    <input type="file"onChange={(e)=>uploadImage(e)} />
    <div className="Upload-image">
        <img src={uploadedImageUrl} alt="" className="signupimage" />
    </div>
   </div>

   <div className="signup-buttons">
    <div className="signUpbtn">SignUp</div>
    <Link  to ={'/'}className="signUpbtn">Home</Link>

   </div>

   </div>

        </div>
    </div>
  )
}

export default SignUp