import React, {useState,useEffect} from 'react'
import './SignUp.css'
import { FaYoutube } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';



const SignUp = () => {
    //state to uploaded profile image url
const[uploadedImageUrl,setUploadedImageUrl]= useState("https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=360")

//state to signup  form field
const [signupField , setSignupField] = useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl});
//to navigate 
const navigate = useNavigate();
//handle typing in import field
const handleInputField=(event,name)=>{
    setSignupField({
        ...signupField,[name]:event.target.value
    })
}
console.log(signupField);

//handle image upload to cloudinary 
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
//handle signup 
const handleSignup = async()=>{
    axios.post('http://localhost:4000/auth/signUp',signupField )
    .then((res)=>{
        console.log(res)
        navigate('/');
    }).catch(err=>{
     console.log(err)
    })
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
    <div className="signUpbtn" onClick={handleSignup}>SignUp</div>
    <Link  to ={'/'}className="signUpbtn">Home</Link>

   </div>

   </div>

        </div>
        
    </div>
  )
}

export default SignUp